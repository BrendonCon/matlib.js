export default class Cone {
  constructor(radius, height) {
    this.height = height;
    this.radius = radius;
  }
  
  area() {
    return Math.PI * Math.hypot(this.radius, this.height) * this.radius + Math.PI * this.radius * this.radius;
  }
  
  volume() {
    return (1 / 3) * Math.PI * this.radius * this.radius * this.height;
  }
}