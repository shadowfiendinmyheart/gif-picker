import React from "react";
import InputStore from "./input.store";
import GifStore from "./gif.store";
import ChatStore from "./chat.store";

class RootStore {
  inputStore: InputStore;

  gifStore: GifStore;

  chatStore: ChatStore;

  constructor() {
    this.chatStore = new ChatStore();
    this.gifStore = new GifStore();
    this.inputStore = new InputStore(this.gifStore);
  }
}

const store = new RootStore();

export type RootStoreType = typeof RootStore;
export const storeContext = React.createContext(store);
export const useStore = () => React.useContext(storeContext);
