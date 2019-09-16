export default class Cube {
  constructor(side) {
    this.side = side;
  }
  
  area() {
    return 6 * this.side * this.side;
  }
  
  volume() {
    return this.side * this.side * this.side;
  }
}