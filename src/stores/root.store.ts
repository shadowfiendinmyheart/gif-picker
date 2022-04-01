import React from "react";
import InputStore from "./input.store";
import GifStore from "./gif.store";

class RootStore {
  inputStore: InputStore;

  gifStore: GifStore;

  constructor() {
    this.inputStore = new InputStore();
    this.gifStore = new GifStore();
  }
}

const store = new RootStore();

export type RootStoreType = typeof RootStore;
export const storeContext = React.createContext(store);
export const useStore = () => React.useContext(storeContext);
