// npm
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// outer
import { EmojisService } from 'src/app/shared/services/emojis.service';
import { Emoji } from 'src/app/shared/models/emoji.model';
// inner

@Component({
  selector: 'app-liked',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.scss']
})
export class LikedComponent implements OnInit {
  public emojis$!: Observable<Emoji[]>;

  public columns: string[] = ['id', 'src', 'preview', 'actions'];

  public searchString: string = '';

  constructor(
    private _emojisService: EmojisService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.emojis$ = this._emojisService.likedEmojis();
  }

  handleSearchInput(value: string): void {
    this.searchString = value;
    this._cdr.markForCheck();
  }

  unlikeEmoji(emoji: Emoji): void {
    const newEmoji: Emoji = {
      ...emoji,
      state: 'idle'
    };

    this._emojisService.updateEmoji(newEmoji);
  }
}
