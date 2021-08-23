import * as Matrix from "../matrix/matrix2";

describe("static methods in Matrix2", () => {
  test("The components of the two matrices are all the same.", () => {
    const key = Matrix.Matrix2.init();
    const target = new Float32Array(4);
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("The components of the two matrices are all the sameThe components of the two matrices are all zero.", () => {
    const key = Matrix.Matrix2.zero();
    const target = new Float32Array(4);
    target[0] = 0;
    target[1] = 0;
    target[2] = 0;
    target[3] = 0;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("The components of the two matrices are all 1 and 0. The order is 1,0,0,1.", () => {
    const key = Matrix.Matrix2.identity();
    const target = new Float32Array(4);
    target[0] = 1;
    target[1] = 0;
    target[2] = 0;
    target[3] = 1;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("Create a 2x2 matrix1.", () => {
    const key = Matrix.Matrix2.create(1, 2, 3, 4);
    const target = new Float32Array(4);
    target[0] = 1;
    target[1] = 2;
    target[2] = 3;
    target[3] = 4;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("Create a 2x2 matrix2.", () => {
    const key = Matrix.Matrix2.create(5, 6, 7, 8);
    const target = new Float32Array(4);
    target[0] = 5;
    target[1] = 6;
    target[2] = 7;
    target[3] = 8;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("This is the addition of 2x2 matrices to each other.", () => {
    const key1 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key2 = Matrix.Matrix2.create(5, 6, 7, 8);
    const key = Matrix.Matrix2.add(key1, key2);
    const target = new Float32Array(4);
    target[0] = 6;
    target[1] = 8;
    target[2] = 10;
    target[3] = 12;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("1. This is the subtraction of 2x2 matrices to each other.", () => {
    const key1 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key2 = Matrix.Matrix2.create(5, 6, 7, 8);
    const key = Matrix.Matrix2.sub(key1, key2);
    const target = new Float32Array(4);
    target[0] = -4;
    target[1] = -4;
    target[2] = -4;
    target[3] = -4;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("2. This is the subtraction of 2x2 matrices to each other.", () => {
    const key1 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key2 = key1;
    const key = Matrix.Matrix2.sub(key1, key2);
    const target = Matrix.Matrix2.zero();
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("1. This is the multiplication of 2x2 matrices to each other.", () => {
    const key1 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key2 = Matrix.Matrix2.create(5, 6, 7, 8);
    const key = Matrix.Matrix2.multi(key1, key2);
    const target = new Float32Array(4);
    target[0] = 19;
    target[1] = 22;
    target[2] = 43;
    target[3] = 50;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("2. This is the multiplication of 2x2 matrices to each other.", () => {
    const key1 = Matrix.Matrix2.create(5, 6, 7, 8);
    const key2 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key = Matrix.Matrix2.multi(key1, key2);
    const target = new Float32Array(4);
    target[0] = 23;
    target[1] = 34;
    target[2] = 31;
    target[3] = 46;
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });

  test("3. This is the multiplication of 2x2 matrices to each other.", () => {
    const key1_1 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key1_2 = Matrix.Matrix2.create(5, 6, 7, 8);
    const key1 = Matrix.Matrix2.multi(key1_1, key1_2);
    const target1 = new Float32Array(4);
    target1[0] = 19;
    target1[1] = 22;
    target1[2] = 43;
    target1[3] = 50;

    const key2_1 = Matrix.Matrix2.create(5, 6, 7, 8);
    const key2_2 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key2 = Matrix.Matrix2.multi(key2_1, key2_2);
    const target2 = new Float32Array(4);
    target2[0] = 23;
    target2[1] = 34;
    target2[2] = 31;
    target2[3] = 46;

    let flag = false;
    [...Array(key1.length === key2.length).keys()].forEach((count) => {
      if (target1[count] === target2[count]) {
        flag = true;
      }
    });

    expect(flag).toStrictEqual(false);
  });

  test("This is the scalar multiplication of 2x2 matrices to each other.", () => {
    const key1 = Matrix.Matrix2.create(1, 2, 3, 4);
    const key2 = 2;
    const key = Matrix.Matrix2.scalarMulti(key1, key2);
    const target = Matrix.Matrix2.create(2, 4, 6, 8);
    let flag = false;
    [...Array(key.length === target.length).keys()].forEach((count) => {
      if (key[count] === target[count]) {
        flag = true;
      } else {
        throw new Error("Error!!");
      }
    });

    expect(flag).toStrictEqual(true);
  });
});
