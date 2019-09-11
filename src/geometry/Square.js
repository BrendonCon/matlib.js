export default class Square {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.length = opts.length;
  }

  area() {
    return this.length * this.length;
  }

  perimeter() {
    return this.length * 4;
  }
}