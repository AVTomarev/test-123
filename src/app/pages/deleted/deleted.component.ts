import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Emoji } from 'src/app/shared/models/emoji.model';
import { EmojisService } from 'src/app/shared/services/emojis.service';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeletedComponent implements OnInit {
  public emojis$!: Observable<Emoji[]>;

  public columns: string[] = ['id', 'src', 'preview', 'actions'];

  public searchString: string = '';

  constructor(
    private _emojisService: EmojisService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.emojis$ = this._emojisService.deletedEmojis();
  }

  handleSearchInput(value: string): void {
    this.searchString = value;
    this._cdr.markForCheck();
  }

  removeFromDeleted(emoji: Emoji): void {
    const newEmoji: Emoji = {
      ...emoji,
      state: 'idle'
    };

    this._emojisService.updateEmoji(newEmoji);
  }
}
