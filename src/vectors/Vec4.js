export default class Vec4 {
  constructor(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;
  }  

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    this.w += v.w;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    this.w -= v.w;
    return this;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    this.w *= scalar;
    return this;
  }

  div(divisor) {
    this.x /= divisor;
    this.y /= divisor;
    this.z /= divisor;
    this.w /= divisor;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
  }

  mag() {
    return Math.hypot(this.x, this.y, this.z, this.w);
  }

  magSq() {
    const mag = this.mag();
    return mag * mag;
  }

  toString() {
    return `Vec4: { x: ${this.x}, y: ${this.y}, z: ${this.z}, w: ${this.w} }`;
  }

  toArray() {
    return [this.x, this.y, this.z, this.w];
  }

  copy() {
    return new Vec4(this.x, this.y, this.z, this.w);
  }

  equals(v) {
    return this.x === v.x && this.y === v.y && this.z === v.z && this.w === v.w;
  }

  static add(u, v) {
    return new Vec4(u.x + v.x, u.y + v.y, u.z + v.z, u.w + v.z);
  }

  static sub(u, v) {
    return new Vec4(u.x - v.x, u.y - v.y, u.z - v.z, u.w - v.w);
  }

  static mult(u, scalar) {
    return new Vec4(u.x * scalar, u.y * scalar, u.z * scalar, u.w * scalar);
  }

  static div(u, divisor) {
    return new Vec4(u.x / divisor, u.y / divisor, u.z / divisor, u.w / divisor);
  }

  static zero() {
    return new Vec4(0, 0, 0, 0);
  }

  static one() {
    return new Vec4(1, 1, 1, 1);
  }

  static dist(u, v) {
    return Math.hypot(u.x - v.x, u.y - v.y, u.z - v.z, u.w - v.w);
  }
}