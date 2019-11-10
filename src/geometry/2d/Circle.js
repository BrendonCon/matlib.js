export default class Circle {
  constructor(radius) {
    this.radius = radius;
    this.diameter = radius * 2;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  circumference() {
    return Math.PI * this.radius * 2;
  }
}