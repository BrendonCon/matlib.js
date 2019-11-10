export default class Square {
  constructor(length) {
    this.length = length;
  }

  area() {
    return this.length * this.length;
  }

  perimeter() {
    return this.length * 4;
  }
}