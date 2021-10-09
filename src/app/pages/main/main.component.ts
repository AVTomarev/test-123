// npm
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// outer
import { EmojisService } from 'src/app/shared/services/emojis.service';
import { Emoji } from 'src/app/shared/models/emoji.model';
// inner

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  public emojis$?: Observable<Emoji[]>;

  public columns: string[] = ['id', 'src', 'preview', 'actions'];

  public searchString: string = '';

  constructor(
    private _emojisService: EmojisService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.emojis$ = this._emojisService.fullList();
  }

  handleSearchInput(value: string): void {
    this.searchString = value;
    this._cdr.markForCheck();
  }

  deleteEmoji(emoji: Emoji): void {
    const newEmoji: Emoji = {
      ...emoji,
      state: 'deleted'
    };

    this._emojisService.updateEmoji(newEmoji);
  }

  likeEmoji(emoji: Emoji): void {
    const newEmoji: Emoji = {
      ...emoji,
      state: 'liked'
    };

    this._emojisService.updateEmoji(newEmoji);
  }
}
