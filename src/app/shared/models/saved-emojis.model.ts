import { EmojisMap } from "./emojis-list.model";

// Emojis structure in localStorage
export interface SavedEmojis {
  liked: EmojisMap;
  deleted: EmojisMap;
}
