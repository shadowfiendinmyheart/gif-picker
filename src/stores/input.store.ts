import debounce from "lodash.debounce";
import { observable, action, makeObservable, computed, reaction } from "mobx";
import GifStore, { Status } from "./gif.store";

class InputStore {
  private gifStore: GifStore;

  constructor(gifStore: GifStore) {
    this.gifStore = gifStore;

    makeObservable(this, {
      text: observable,
      debouncedQuery: observable,

      setText: action.bound,

      isCommandMode: computed,
      isGifMode: computed,
      command: computed,
      query: computed,
    });

    reaction(
      () => this.query,
      debounce((query) => {
        this.debouncedQuery = query;
      }, 500),
    );
  }

  text = "";

  debouncedQuery = "";

  public setText(text: string) {
    this.text = text;
  }

  get isCommandMode() {
    if (this.text[0] === "/") {
      return true;
    }

    return false;
  }

  get isGifMode() {
    if (this.command === "/gif" && this.query.trim().length) {
      this.gifStore.setStatus(Status.INITIAL);
      return true;
    }

    return false;
  }

  get command() {
    return this.text.split(" ")[0];
  }

  get query() {
    return this.text.slice(this.command.length);
  }
}

export default InputStore;
