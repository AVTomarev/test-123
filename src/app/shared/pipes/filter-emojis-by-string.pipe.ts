import { Pipe, PipeTransform } from '@angular/core';
import { Emoji } from '../models/emoji.model';

@Pipe({
  name: 'filterEmojisByString'
})
export class FilterEmojisByStringPipe implements PipeTransform {
  transform(list: Emoji[], str: string): Emoji[] {
    return str
      ? list.filter(emoji => !emoji.id.indexOf(str))
      : list;
  }
}
