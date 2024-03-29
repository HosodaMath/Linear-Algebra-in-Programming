import * as Vector from "../vector/vector2";

describe("methods in Vector2", () => {
  test("The Components of the vector v are 1 and 2", () => {
    const v = new Vector.Vector2(1, 2);

    const key = v.toArray();
    const target = [1, 2];
    expect(key).toStrictEqual(target);
  });

  test("The Components of the vector w are 3 and 4", () => {
    const w = new Vector.Vector2(3, 4);
    const key = w.toArray();
    const target = [3, 4];
    expect(key).toStrictEqual(target);
  });

  test("Vector v add vector w answers are 4 and 6", () => {
    const v = new Vector.Vector2(1, 2);
    const w = new Vector.Vector2(3, 4);
    const answer = v.add(w).toArray();
    const target = [4, 6];
    expect(answer).toStrictEqual(target);
  });

  test("Vector v sub vector w answers are -2 and -2", () => {
    const v = new Vector.Vector2(1, 2);
    const w = new Vector.Vector2(3, 4);
    const answer = v.sub(w).toArray();
    const target = [-2, -2];
    expect(answer).toStrictEqual(target);
  });

  test("Multiplying a vector v with 2 and 3 components by a scalar value of 2 outputs a vector with 4 and 6 components as the answer.", () => {
    const v = new Vector.Vector2(2, 3);
    const s = 2;
    const answer = v.multiScalar(s).toArray();
    const target = [4, 6];
    expect(answer).toStrictEqual(target);
  });

  test("Multiply vector v and vector w, which have the same components 4 and 6, respectively, and the answer is a vector with 16 and 36.", () => {
    const v = new Vector.Vector2(4, 6);
    const w = new Vector.Vector2(4, 6);
    const answer = v.multiVec(w).toArray();
    const target = [16, 36];
    expect(answer).toStrictEqual(target);
  });

  // Testing the inner product of vectors1
  test("Inner product of vectors answer 50", () => {
    const v = new Vector.Vector2(5, 5);
    const w = new Vector.Vector2(5, 5);
    const answer = v.dot(w);
    const target = 50;
    expect(answer).toStrictEqual(target);
  });

  // Testing the inner product of vectors2
  test("Inner product of vectors answer 100", () => {
    const v = new Vector.Vector2(5, 10);
    const w = new Vector.Vector2(10, 5);
    const answer = v.dot(w);
    const target = 100;
    expect(answer).toStrictEqual(target);
  });

  // Testing the cross product of vectors1
  test("Cross product of vectors answer 0", () => {
    const v = new Vector.Vector2(5, 5);
    const w = new Vector.Vector2(5, 5);
    const answer = v.cross(w);
    const target = 0;
    expect(answer).toStrictEqual(target);
  });

  // Testing the cross product of vectors2
  test("Cross product of vectors answer 400", () => {
    const v = new Vector.Vector2(5, 100);
    const w = new Vector.Vector2(100, 1);
    const answer = v.cross(w);
    const target = 400;
    expect(answer).toStrictEqual(target);
  });
});
