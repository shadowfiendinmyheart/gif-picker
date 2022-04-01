import { observable, action, makeObservable } from "mobx";
import getGifs from "../api/gif.api";
import { Gif } from "../models/gif.model";

enum Status {
  PEDNING = "PEDNING",
  DONE = "DONE",
  ERROR = "ERROR",
}

class GifStore {
  constructor() {
    makeObservable(this, {
      gifs: observable,
      fetchStatus: observable,

      fetchGifs: action.bound,
      setGifs: action.bound,
    });
  }

  gifs: Gif[] = [];

  fetchStatus: Status = Status.DONE;

  public async fetchGifs(query: string) {
    if (!query) return;

    this.gifs = [];
    this.fetchStatus = Status.PEDNING;

    try {
      this.gifs = await getGifs(query);
      this.fetchStatus = Status.DONE;
    } catch (error) {
      this.fetchStatus = Status.ERROR;
    }
  }

  public setGifs(gifs: Gif[]) {
    this.gifs = gifs;
  }
}

export default GifStore;
