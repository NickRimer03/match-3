const tokenParams = { width: 32, height: 32 };

export default class Draw {
  constructor(field) {
    this.field = field;
  }

  static drawToken({ color, w, h }) {
    const token = document.createElement("div");
    token.classList.add("token");
    token.classList.add(`_${color}`);
    token.style.left = w * tokenParams.width + "px";
    token.style.top = h * tokenParams.height + "px";
    token.textContent = color;

    return token;
  }

  draw() {
    for (let w = 0; w < this.field.width; w++) {
      for (let h = 0; h < this.field.height; h++) {
        document.body.appendChild(Draw.drawToken({ color: this.field.gameField[w][h], w, h }));
      }
    }
  }
}
