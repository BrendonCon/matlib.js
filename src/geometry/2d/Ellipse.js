export default class Ellipse {
  constructor(semiMinorAxis, semiMajorAxis) {
    this.semiMinorAxis = semiMinorAxis;
    this.semiMajorAxis = semiMajorAxis;
  }

  area() {
    return Math.PI * this.semiMinorAxis * this.semiMajorAxis;
  }
}