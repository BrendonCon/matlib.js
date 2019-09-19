export default class Vec3 {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }  

  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  div(divisor) {
    this.x /= divisor;
    this.y /= divisor;
    this.z /= divisor;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
    this.x = this.y * v.z - this.z * v.y;
    this.y = this.z * v.x - this.x * v.z;
    this.z = this.x * v.y - this.y * v.x;
    return this;
  }

  mag() {
    return Math.hypot(this.x, this.y, this.z);
  }

  magSq() {
    const mag = this.mag();
    return mag * mag;
  }

  normalize() {
    const mag = this.mag();

    if (mag > 0) {
      this.div(mag);
    }

    return this;
  }

  dist(v) {
    return Math.hypot(
      v.x - this.x, 
      v.y - this.y, 
      v.z - this.z
    );
  }

  lerp(v, normal) {
    this.x += (v.x - this.x) * normal;
    this.y += (v.y - this.y) * normal;
    this.z += (v.z - this.z) * normal;
    return this;
  }

  zero() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
    return this;
  }

  abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    this.z = Math.abs(this.z);
    return this;
  }

  negate() {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this;
  }

  one() {
    this.x = 1;
    this.y = 1;
    this.z = 1;
    return this;
  }

  random() {
    this.x = Math.random();
    this.y = Math.random();
    this.z = Math.random();
    return this;
  }

  limit(max) {
    const mag = this.mag();

    if (mag > max) {
      this.normalize();
      this.mult(max);
    }

    return this;
  }

  toString() {
    return `Vec3: { x: ${this.x}, y: ${this.y}, z: ${this.z} }`;
  }

  toArray() {
    return [this.x, this.y, this.z];
  }

  copy() {
    return new Vec3(this.x, this.y, this.z);
  }

  equals(v) {
    return this.x === v.x && this.y === v.y && this.z === v.z;
  }

  static add(u, v) {
    return new Vec3(
      u.x + v.x, 
      u.y + v.y, 
      u.z + v.z
    );
  }

  static sub(u, v) {
    return new Vec3(
      u.x - v.x, 
      u.y - v.y, 
      u.z - v.z
    );
  }

  static mult(u, scalar) {
    return new Vec3(
      u.x * scalar, 
      u.y * scalar, 
      u.z * scalar
    );
  }

  static div(u, divisor) {
    return new Vec3(
      u.x / divisor, 
      u.y / divisor, 
      u.z / divisor
    );
  }

  static left() {
    return new Vec3(-1, 0, 0);
  }

  static right() {
    return new Vec3(1, 0, 0);
  }

  static up() {
    return new Vec3(0, -1, 0);
  }

  static down() {
    return new Vec3(0, 1, 0);
  }

  static zero() {
    return new Vec3(0, 0, 0);
  }

  static one() {
    return new Vec3(1, 1, 1);
  }

  static dist(u, v) {
    return Math.hypot(
      u.x - v.x, 
      u.y - v.y, 
      u.z - v.z
    );
  }

  static cross(u, v) {
    return new Vector3(
      u.y * v.z - u.z * v.y,
      u.z * v.x - u.x * v.z,
      u.x * v.y - u.y * v.x
    );
  }

  static dot(u, v) {
    return u.x * v.x + u.y * v.y + u.z * v.z;
  }

  static mag(u) {
    return Math.hypot(u.x, u.y, u.z);
  }

  static negate(u) {
    return new Vec3(
      u.x * -1,
      u.y * -1,
      u.z * -1
    );
  }

  static random() {
    return new Vector3(
      Math.random(),
      Math.random(),
      Math.random()
    );
  }

  static abs(u) {
    return new Vec3(
      Math.abs(u.x),
      Math.abs(u.y),
      Math.abs(u.z)
    );
  }

  static lerp(u, v, normal) {
    return new Vec3(
      (v.x - u.x) * normal + u.x,
      (v.y - u.y) * normal + u.y,
      (v.z - u.z) * normal + u.z
    );
  }
}