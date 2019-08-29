export default class Mat4x4 {
  constructor(mat) {
    this.mat = mat || [
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ];
  }

  add(A) {
    this.mat[0] += A[0];
    this.mat[1] += A[1];
    this.mat[2] += A[2];
    this.mat[3] += A[3];
    this.mat[4] += A[4];
    this.mat[5] += A[5];
    this.mat[6] += A[6];
    this.mat[7] += A[7];
    this.mat[8] += A[8];
    this.mat[9] += A[9];
    this.mat[10] += A[10];
    this.mat[11] += A[11];
    this.mat[12] += A[12];
    this.mat[13] += A[13];
    this.mat[14] += A[14];
    this.mat[15] += A[15];
  }
  
  sub(A) {
    this.mat[0] -= A[0];
    this.mat[1] -= A[1];
    this.mat[2] -= A[2];
    this.mat[3] -= A[3];
    this.mat[4] -= A[4];
    this.mat[5] -= A[5];
    this.mat[6] -= A[6];
    this.mat[7] -= A[7];
    this.mat[8] -= A[8];
    this.mat[9] -= A[9];
    this.mat[10] -= A[10];
    this.mat[11] -= A[11];
    this.mat[12] -= A[12];
    this.mat[13] -= A[13];
    this.mat[14] -= A[14];
    this.mat[15] -= A[15];    
  }

  mult(scalar) {
    this.mat[0] *= scalar;
    this.mat[1] *= scalar;
    this.mat[2] *= scalar;
    this.mat[3] *= scalar;
    this.mat[4] *= scalar;
    this.mat[5] *= scalar;
    this.mat[6] *= scalar;
    this.mat[7] *= scalar;
    this.mat[8] *= scalar;
    this.mat[9] *= scalar;
    this.mat[10] *= scalar;
    this.mat[11] *= scalar;
    this.mat[12] *= scalar;
    this.mat[13] *= scalar;
    this.mat[14] *= scalar;
    this.mat[15] *= scalar;
  }

  div(divisor) {
    this.mat[0] /= divisor;
    this.mat[1] /= divisor;
    this.mat[2] /= divisor;
    this.mat[3] /= divisor;
    this.mat[4] /= divisor;
    this.mat[5] /= divisor;
    this.mat[6] /= divisor;
    this.mat[7] /= divisor;
    this.mat[8] /= divisor;
    this.mat[9] /= divisor;
    this.mat[10] /= divisor;
    this.mat[11] /= divisor;
    this.mat[12] /= divisor;
    this.mat[13] /= divisor;
    this.mat[14] /= divisor;
    this.mat[15] /= divisor;
  }

  toString() {
    return this.mat.toString();
  }

  copy() {
    return new Mat4x4([...this.mat]);
  }

  static identity() {
    return new Mat4x4([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);
  }

  static zero() {
    return new Mat4x4([
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0,
      0, 0, 0, 0
    ]);
  }
}