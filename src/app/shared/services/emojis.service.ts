// npm
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { toString } from 'ramda';
// outer
import { GithubService } from 'src/app/api/github.service';
import { Emoji } from 'src/app/shared/models/emoji.model';
import { EmojisMap } from 'src/app/shared/models/emojis-list.model';
import { SavedEmojis } from 'src/app/shared/models/saved-emojis.model';
// inner

@Injectable({
  providedIn: 'root'
})
export class EmojisService {
  private _allEmojis: BehaviorSubject<Emoji[]> = new BehaviorSubject<Emoji[]>([]);

  constructor(
    private _githubService: GithubService
  ) {
    this._updateEmojisList();
  }

  public fullList(): Observable<Emoji[]> {
    return this._allEmojis.asObservable()
      .pipe(
        map(list => list.filter(emoji => emoji.state !== 'deleted'))
      );
  }

  public likedEmojis(): Observable<Emoji[]> {
    return this._allEmojis.asObservable()
      .pipe(
        map(list => list.filter(emoji => emoji.state === 'liked'))
      );
  }

  public deletedEmojis(): Observable<Emoji[]> {
    return this._allEmojis.asObservable()
      .pipe(
        map(list => list.filter(emoji => emoji.state === 'deleted'))
      );
  }

  public updateEmoji(newEmoji: Emoji): void {
    const newEmojisList = [ ...this._allEmojis.getValue() ]
      .map(emoji => {
        return emoji.id === newEmoji.id ? newEmoji : emoji;
      });

    this._saveEmoji(newEmoji);
    this._allEmojis.next(newEmojisList);
  }

  private _updateEmojisList(): void {
    const subscription = this._githubService.getEmojisList()
      .subscribe(list => {
        const newList: Emoji[] = [];

        const listKeys = Object.keys(list);
        // Эмоджи дофига, поэтому для простоты и в рамках задания ограничимся первой 100 элементов
        listKeys.length = 100;

        // Подсасываем списки локальных эмоджи
        const localEmojis = this._getEmojisFromLocalStorage();

        // Чтобы не делать лишних проходок по массиву, создаем новый эмоджи и выставляем ему статус прямо здесь же
        for (let key of listKeys) {
          const newEmoji: Emoji = {
            id: key,
            src: list[key],
            state: 'idle',
          };

          if (localEmojis.liked[newEmoji.id]) {
            newEmoji.state = 'liked';
          }
          else if (localEmojis.deleted[newEmoji.id]) {
            newEmoji.state = 'deleted';
          }

          newList.push(newEmoji);
        }

        this._allEmojis.next(newList);

        subscription.unsubscribe();
      });
  }

  private _saveEmoji(emoji: Emoji): void {
    const savedEmojis = this._getEmojisFromLocalStorage();

    switch (emoji.state) {
      case ('liked'):
        savedEmojis.liked[emoji.id] = emoji;
        break;

      case ('deleted'):
        savedEmojis.deleted[emoji.id] = emoji;
        break;

      // 'idle' state as default
      default:
        if (savedEmojis.liked[emoji.id]) { delete savedEmojis.liked[emoji.id] }
        if (savedEmojis.deleted[emoji.id]) { delete savedEmojis.deleted[emoji.id] }
    }

    const stringifyedEmojis = toString(savedEmojis);
    localStorage.setItem('savedEmojis', stringifyedEmojis)
  }

  private _getEmojisFromLocalStorage(): SavedEmojis {
    let savedEmojisStr = localStorage.getItem('savedEmojis');

    const savedEmojis: SavedEmojis = savedEmojisStr
      ? JSON.parse(savedEmojisStr)
      : {
        liked: {},
        deleted: {}
      };

    savedEmojis.liked

    return savedEmojis;
  }
}
