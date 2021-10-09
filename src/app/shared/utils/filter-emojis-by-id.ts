import { EmojisMap } from "src/app/shared/models/emojis-list.model";

export function filterEmojisListById(list: EmojisMap, text: string | null): EmojisMap {
  const newList: EmojisMap = {};
  const textStr = text === null ? '' : text;

  for (let id in list) {
    if (text === '' || id.indexOf(textStr)) {
      newList[id] = list[id];
    }
  }

  return newList;
}
