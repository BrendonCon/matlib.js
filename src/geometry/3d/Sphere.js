export default class Sphere {
  constructor(radius) {
    this.radius = radius;
  }
  
  area() {
    return 4 * Math.PI * this.radius * this.radius;
  }
  
  volume() {
    return (4 / 3) * Math.PI * this.radius * this.radius * this.radius;
  }
}