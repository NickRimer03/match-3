export default class Field {
  constructor([w, h]) {
    this.gameField = new Array(h).fill(0).map(() => new Array(w).fill(0));
  }
}
