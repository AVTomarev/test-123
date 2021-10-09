import { EmojiState } from "./emoji-state.model";

export interface Emoji {
  id: string;
  src: string;
  state: EmojiState;
}
