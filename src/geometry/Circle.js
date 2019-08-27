export default class Circle {
  constructor(opts = {}) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
    this.diameter = opts.radius * 2;
  }
}