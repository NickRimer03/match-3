import { getRandomInt } from "./utils";

export default class Field {
  constructor([w, h]) {
    this.maxColors = 5;
    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));
  }

  fill() {
    this.gameField = this.gameField.map(col => col.map(e => (e === 0 ? getRandomInt(1, this.maxColors) : e)));

    return this;
  }

  get width() {
    return this.gameField.length;
  }

  get height() {
    return this.gameField[0].length;
  }
}
