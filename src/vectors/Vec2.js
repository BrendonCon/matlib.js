export default class Vec2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  set(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  sub(v) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  div(divisor) {
    this.x /= divisor;
    this.y /= divisor;
    return this;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y;
  }

  cross(v) {
    return this.x * v.y - this.y * v.x;
  }

  mag() {
    return Math.hypot(this.x, this.y);
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
      v.y - this.y
    );
  }

  lerp(v, normal) {
    this.x += (v.x - this.x) * normal;
    this.y += (v.y - this.y) * normal;
    return this;
  }

  zero() {
    this.x = 0;
    this.y = 0;
    return this;
  }

  abs() {
    this.x = Math.abs(this.x);
    this.y = Math.abs(this.y);
    return this;
  }

  negate() {
    this.x *= -1;
    this.y *= -1;
    return this;
  }

  one() {
    this.x = 1;
    this.y = 1;
    return this;
  }

  random() {
    this.x = Math.random();
    this.y = Math.random();
    return this;
  }

  rotate(theta) {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);
    this.x = this.x * cos - this.y * sin;
    this.y = this.x * sin + this.y * cos;
    return this;
  }

  angle() {
    return Math.atan2(this.y, this.x);
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
    return `Vec2: { x: ${this.x}, y: ${this.y} }`;
  }

  toArray() {
    return [this.x, this.y];
  }

  copy() {
    return new Vec2(this.x, this.y);
  }

  equals(v) {
    return this.x === v.x && this.y === v.y;
  }

  static add(u, v) {
    return new Vec2(
      u.x + v.x, 
      u.y + v.y
    );
  }

  static sub(u, v) {
    return new Vec2(
      u.x - v.x, 
      u.y - v.y
    );
  }

  static mult(u, scalar) {
    return new Vec2(
      u.x * scalar, 
      u.y * scalar
    );
  }

  static div(u, divisor) {
    return new Vec2(
      u.x / divisor, 
      u.y / divisor
    );
  }

  static left() {
    return new Vec2(-1, 0);
  }

  static right() {
    return new Vec2(1, 0);
  }

  static up() {
    return new Vec2(0, -1);
  }

  static down() {
    return new Vec2(0, 1);
  }

  static zero() {
    return new Vec2(0, 0);
  }

  static one() {
    return new Vec2(1, 1);
  }

  static dist(u, v) {
    return Math.hypot(
      u.x - v.x, 
      u.y - v.y
    );
  }

  static cross(u, v) {
    return u.x * v.y - u.y * v.x;
  }

  static dot(u, v) {
    return u.x * v.x + u.y * v.y;
  }

  static mag(u) {
    return Math.hypot(u.x, u.y);
  }

  static negate(u) {
    return new Vec2(
      u.x * -1,
      u.y * -1
    );
  }

  static random() {
    return new Vec2(
      Math.random(), 
      Math.random()
    );
  }

  static abs(u) {
    return new Vec2(
      Math.abs(u.x),
      Math.abs(u.y)
    );
  }

  static lerp(u, v, normal) {
    return new Vec2(
      (v.x - u.x) * normal + u.x,
      (v.y - u.y) * normal + u.y
    );
  }

  static angle(u) {
    return Math.atan2(u.y, u.x);
  }

  static rotate(u, theta) {
    const cos = Math.cos(theta);
    const sin = Math.sin(theta);

    return new Vec2(
      u.x * cos - u.y * sin,
      u.x * sin + u.y * cos
    );
  }

  static normalize(u) {
    const mag = Math.hypot(u.x, u.y);

    return new Vec2(
      u.x / mag,
      u.y / mag
    );
  }
}