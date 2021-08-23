/**
 * I've changed all the code to static methods,
 * and I'm very sorry to those who came to see the code😔
 * @class Matrix2
 * @todo Testing with ts-jest
 * @todo Implementing Affine Transformations
 */
export class Matrix2 {
  /**
   * @static init
   */
  static init = (): Float32Array => {
    const mat2 = new Float32Array(4);

    return mat2;
  };

  /**
   * 
   * @param a11 
   * @param a12 
   * @param a21 
   * @param a22 
   * @returns 
   */
  static create = (
    a11: number,
    a12: number,
    a21: number,
    a22: number
  ): Float32Array => {
    const mat2 = Matrix2.init();
    mat2[0] = a11;
    mat2[1] = a12;
    mat2[2] = a21;
    mat2[3] = a22;

    return mat2;
  };

  /**
   * @static zero
   */
  static zero = () => {
    const mat2 = Matrix2.init();

    mat2[0] = 0;
    mat2[1] = 0;
    mat2[2] = 0;
    mat2[3] = 0;

    return mat2;
  };

  /**
   * @static identity
   * @param mat2
   */
  static identity = (mat2?: Float32Array): Float32Array => {
    if (mat2 === undefined) {
      mat2 = Matrix2.init();
    }

    mat2[0] = 1;
    mat2[1] = 0;
    mat2[2] = 0;
    mat2[3] = 1;

    return mat2;
  };

  /**
   * @static add
   * @param a
   * @param b
   */
  static add = (a: Float32Array, b: Float32Array): Float32Array => {
    const mat2 = Matrix2.init();
    mat2[0] = a[0] + b[0];
    mat2[1] = a[1] + b[1];
    mat2[2] = a[2] + b[1];
    mat2[3] = a[3] + b[3];

    return mat2;
  };

  /**
   * @static sub
   * @param a
   * @param b
   */
  static sub = (a: Float32Array, b: Float32Array) => {
    const mat2 = Matrix2.init();
    mat2[0] = a[0] - b[0];
    mat2[1] = a[1] - b[1];
    mat2[2] = a[2] - b[1];
    mat2[3] = a[3] - b[3];

    return mat2;
  };

  /**
   * @static multi
   * @param a
   * @param b
   */
  static multi = (a: Float32Array, b: Float32Array): Float32Array => {
    const mat2 = Matrix2.init();
    mat2[0] = a[0] * b[0] + a[1] * b[2];
    mat2[1] = a[0] * b[1] + a[1] * b[3];
    mat2[2] = a[2] * b[0] + a[3] * b[2];
    mat2[3] = a[2] * b[1] + a[3] * b[3];

    return mat2;
  };

  /**
   * @static scalarMulti
   * @param a
   * @param s
   */
  static scalarMulti = (a: Float32Array, s: number): Float32Array => {
    const mat2 = Matrix2.init();

    mat2[0] = a[0] * s;
    mat2[1] = a[1] * s;
    mat2[2] = a[2] * s;
    mat2[3] = a[3] * s;

    return mat2;
  };
}
