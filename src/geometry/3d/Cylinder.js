export default class Cylinder {
  constructor(radius, height) {
    this.height = height;
    this.radius = radius;
  }
  
  area() {
    return (Math.PI * 2 * this.radius * this.radius) + Math.PI * 2 * this.radius * this.height;
  }

  volume() {
    return Math.PI * this.radius * this.radius * this.height;
  }
}