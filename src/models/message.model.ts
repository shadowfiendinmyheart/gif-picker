import { Gif } from "./gif.model";

export interface Message {
  text?: string;
  gif?: Gif;
  time: Date;
  isMy: boolean;
}
