export default class Mat3x3 {
  constructor(mat) {
    this.mat = mat || [
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ];
  }

  set(chi1, psi1, zeta1, chi2, psi2, zeta2, chi3, psi3, zeta3) {
    this.mat[0] = chi1;
    this.mat[1] = psi1;
    this.mat[2] = zeta1;
    this.mat[3] = chi2;
    this.mat[4] = psi2;
    this.mat[5] = zeta2;
    this.mat[6] = chi3;
    this.mat[7] = psi3;
    this.mat[8] = zeta3;
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
  }

  toString() {
    return this.mat.toString();
  }

  copy() {
    return new Mat3x3([...this.mat]);
  }

  static identity() {
    return new Mat3x3([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ]);
  }

  static zero() {
    return new Mat3x3([
      0, 0, 0,
      0, 0, 0,
      0, 0, 0
    ]);
  }
}