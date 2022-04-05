import { observable, action, makeObservable } from "mobx";
import { Message } from "../models/message.model";

const minuteAgo = new Date(Date.now() - 60000);

class ChatStore {
  messages: Message[] = [
    {
      text: "Привет, отправь мне гифку!",
      isYours: false,
      time: minuteAgo,
    },
  ];

  constructor() {
    makeObservable(this, {
      messages: observable,

      addMessage: action.bound,
    });
  }

  public addMessage(message: Message) {
    this.messages = [...this.messages, message];
  }
}

export default ChatStore;
