export default class Ellipse {
  constructor(opts = {}) {
    this.x = opts.x;
    this.y = opts.y;
    this.radiusX = opts.radiusX;
    this.radiusY = opts.radiusY;
  }

  area() {
    return Math.PI * this.radiusX * this.radiusY;
  }
}