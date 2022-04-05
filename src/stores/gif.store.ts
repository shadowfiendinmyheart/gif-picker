import { observable, action, makeObservable } from "mobx";
import getGifs from "../api/gif.api";
import { Gif } from "../models/gif.model";

export enum Status {
  INITIAL = "INITIAL",
  PEDNING = "PEDNING",
  DONE = "DONE",
  ERROR = "ERROR",
  NOT_FOUND = "NOT_FOUND",
}

class GifStore {
  gifs: Gif[] = [];

  status: Status = Status.INITIAL;

  constructor() {
    makeObservable(this, {
      gifs: observable,
      status: observable,

      fetchGifs: action.bound,
      setGifs: action.bound,
    });
  }

  public async fetchGifs(query: string) {
    if (!query) return;

    this.gifs = [];
    this.status = Status.PEDNING;

    try {
      const newGifs = await getGifs(query);
      if (newGifs.length === 0) {
        this.status = Status.NOT_FOUND;
        return;
      }

      this.gifs = newGifs;
      this.status = Status.DONE;
    } catch (error) {
      this.status = Status.ERROR;
    }
  }

  public setGifs(gifs: Gif[]) {
    this.gifs = gifs;
  }

  public setStatus(status: Status) {
    this.status = status;
  }
}

export default GifStore;
