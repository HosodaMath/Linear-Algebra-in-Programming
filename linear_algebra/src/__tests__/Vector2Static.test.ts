import * as Vector from "../vector/vector2";

describe("static methods in Vector2", () => {
  test("The Components of the vector v are 1 and 2", () => {
    const v = new Vector.Vector2(1, 2);
    const key = Vector.Vector2.toArray(v);
    const target = [1, 2];
    expect(key).toStrictEqual(target);
  });

  test("The components of the two vectors are the same.", () => {
    const v = new Vector.Vector2(101, 201);
    const w = new Vector.Vector2(101, 201);
    const key1 = Vector.Vector2.toArray(v);
    const key2 = Vector.Vector2.toArray(w);
    const target = key1[0] === key2[0] && key1[1] === key2[1];
    expect(target).toStrictEqual(true);
  });

  test("Vector v add vector w answers are 4 and 6", () => {
    const v = new Vector.Vector2(1, 2);
    const w = new Vector.Vector2(3, 4);
    const calc = Vector.Vector2.add(v, w);
    const answer = Vector.Vector2.toArray(calc);
    const target = [4, 6];
    expect(answer).toStrictEqual(target);
  });

  test("Vector v sub vector w answers are -2 and -2", () => {
    const v = new Vector.Vector2(1, 2);
    const w = new Vector.Vector2(3, 4);
    const calc = Vector.Vector2.sub(v, w);
    const answer = Vector.Vector2.toArray(calc);
    const target = [-2, -2];
    expect(answer).toStrictEqual(target);
  });

  test("Multiplying a vector v with 2 and 3 components by a scalar value of 2 outputs a vector with 4 and 6 components as the answer.", () => {
    const v = new Vector.Vector2(2, 3);
    const s = 2;
    const calc = Vector.Vector2.scalarMulti(v, s);
    const answer = Vector.Vector2.toArray(calc);
    const target = [4, 6];
    expect(answer).toStrictEqual(target);
  });

  test("Multiply vector v and vector w, which have the same components 4 and 6, respectively, and the answer is a vector with 16 and 36.", () => {
    const v = new Vector.Vector2(4, 6);
    const w = new Vector.Vector2(4, 6);
    const calc = Vector.Vector2.multiVec(v, w);
    const answer = Vector.Vector2.toArray(calc);
    const target = [16, 36];
    expect(answer).toStrictEqual(target);
  });

  // Testing the inner product of vectors1
  test("Inner product of vectors answer 50", () => {
    const v = new Vector.Vector2(5, 5);
    const w = new Vector.Vector2(5, 5);
    const answer = Vector.Vector2.dot(v, w);
    const target = 50;
    expect(answer).toStrictEqual(target);
  });

  // Testing the inner product of vectors2
  test("Inner product of vectors answer 100", () => {
    const v = new Vector.Vector2(5, 10);
    const w = new Vector.Vector2(10, 5);
    const answer = Vector.Vector2.dot(v, w);
    const target = 100;
    expect(answer).toStrictEqual(target);
  })
  
   // Testing the cross product of vectors1
   test("Cross product of vectors answer 0", () => {
    const v = new Vector.Vector2(5, 5);
    const w = new Vector.Vector2(5, 5);
    const answer = Vector.Vector2.cross(v, w);
    const target = 0;
    expect(answer).toStrictEqual(target);
  });

   // Testing the cross product of vectors2
   test("Cross product of vectors answer 400", () => {
    const v = new Vector.Vector2(5, 100);
    const w = new Vector.Vector2(100, 1);
    const answer = Vector.Vector2.cross(v, w);
    const target = 400;
    expect(answer).toStrictEqual(target);
  });
});
