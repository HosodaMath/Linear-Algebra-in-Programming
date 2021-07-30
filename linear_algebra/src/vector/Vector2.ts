/**
 * Vector2
 * @class Vector2
 * @author Shingo Hosoda
 * @copyright Shingo Hosoda
 * @license MIT
 * @todo TS-Jestを使ったテストをする
 */
export class Vector2 {
  public x: number;
  public y: number;
  /**
   * @description コンストラクタ
   * @constructor Vector2
   * @param x ベクトルの成分1
   * @param y ベクトルの成分2
   */
  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  // ここからメソッド🥺

  /**
   * @method Vector2
   * @description ベクトル同士の加算
   * @param ベクトル
   * @returns 加算した結果を返す
   */
  add = (v: Vector2): Vector2 => {
    this.x = this.x + v.x;
    this.y = this.y + v.y;

    return this;
  };

  /**
   * @method Vector2
   * @description ベクトル同士の減算
   * @param v ベクトル
   * @returns 減算した結果を返す
   */
  sub = (v: Vector2): Vector2 => {
    this.x = this.x - v.x;
    this.y = this.y - v.y;

    return this;
  };

  /**
   * @method Vector2
   * @description ベクトルをスカラー倍する
   * @param s スカラー値
   * @returns ベクトルをスカラー倍した結果を返す
   */
  multi = (s: number): Vector2 => {
    this.x = this.x * s;
    this.y = this.y * s;

    return this;
  };

  /**
   * @method Vector2
   * @description ベクトル同士の乗算
   * @param v ベクトル
   * @returns　乗算した結果を返す
   */
  multiVec = (v: Vector2): Vector2 => {
    this.x = this.x * v.x;
    this.y = this.y * v.y;

    return this;
  };

  /**
   * @method Vector2
   * @description ベクトルの割り算
   * @param s スカラー値
   * @returns 割り算した結果を返す
   */
  div = (s: number): Vector2 => {
    return this.multi(1.0 / s);
  };

  /**
   * @method Vector2
   * @description ベクトルの割り算
   * @param v ベクトル
   * @returns 割り算した結果を返す
   */
  divVec = (v: Vector2): Vector2 => {
    this.x /= v.x;
    this.y /= v.y;
    return this;
  };

  /**
   * @method Vector2
   * @description ベクトルの内積を求める
   * @param v ベクトル
   * @returns 内積の計算結果を返す
   */
  dot = (v: Vector2): number => {
    return this.x * v.x + this.y * v.y;
  };

  /**
   * @method Vector2
   * @description ベクトルの外積を求める
   * @param v ベクトル
   * @returns 外積の計算結果を返す
   */
  cross = (v: Vector2): number => {
    return this.x * v.x - this.y * v.y;
  };

  /**
   * @method Vector2
   * @description 逆ベクトルを求める
   * @returns　マイナスのベクトルを返す
   */
  inverse = (): Vector2 => {
    this.x *= -1;
    this.y *= -1;

    return this;
  };

  /**
   * @method Vector2
   * @description 大きさを求める1 magnitude関数の前処理計算
   * @returns ベクトルの成分同士の計算した結果を返す
   */
  sqMagnitude = (): number => {
    return this.x * this.x + this.y * this.y;
  };

  /**
   * @method Vector2
   * @description 大きさを求める2 平方和の平方根を求める関数hypotと同じ
   * @returns 平方和の平方根で計算した結果を返す
   */
  magnitude = () => {
    return Math.sqrt(this.sqMagnitude());
  };

  /**
   * @method Vector2
   * @description ベクトルの距離を求める
   * @param v ベクトル
   * @returns ベクトルの距離を返す
   */
  distance = (v: Vector2): number => {
    return this.sub(v).magnitude();
  };

  /**
   * @method Vector2
   * @description ベクトルを正規化する
   * @returns 正規化したベクトル
   */
  normalize = () => {
    const mag = this.magnitude();

    return this.multi(1.0 / mag);
  };

  /**
   * @method Vector2
   * @description ベクトルのクローンを作成
   * @returns ベクトルのクローンを返す
   */
  clone = () => {
    return new Vector2(this.x, this.y);
  };

  /**
   * @method Vector2
   * @description ベクトルを配列化する
   * @returns ベクトルを配列で返す
   */
  toArray = (): [number, number] => {
    return [this.x, this.y];
  };

  /**
   * @method Vector2
   * @description 文字列で出力
   * @returns ベクトルを文字列で返す
   */
  str = () => {
    return `vec2(${this.x}, ${this.y})`;
  };

  // ここから静的メソッド😌

  /**
   * @static Vector2の静的メソッド
   * @description ゼロベクトルを求める
   * @returns ゼロベクトルを返す
   */
  static zero = (): Vector2 => {
    return new Vector2(0.0, 0.0);
  };

  /**
   * @static Vector2の静的メソッド
   * @description ベクトル同士の加算
   * @param v ベクトル1
   * @param w ベクトル2
   * @returns 加算した結果を返す
   */
  static add = (v: Vector2, w: Vector2): Vector2 => {
    const x = v.x + w.x;
    const y = v.y + w.y;

    return new Vector2(x, y);
  };

  /**
   * @static Vector2の静的メソッド
   * @description ベクトル同士の減算結果を返す
   * @param v ベクトル1
   * @param w ベクトル2
   * @returns 減算した結果を返す
   */
  static sub = (v: Vector2, w: Vector2): Vector2 => {
    const x = v.x - w.x;
    const y = v.y - w.y;

    return new Vector2(x, y);
  };

  /**
   * @static Vector2の静的メソッド
   * @description ベクトルをスカラー倍する
   * @param v ベクトル
   * @param s スカラー値
   * @returns スカラー倍した結果を返す
   */
  static multi = (v: Vector2, s: number): Vector2 => {
    return new Vector2(v.x * s, v.y * s);
  };

  /**
   * @static Vector2の静的メソッド
   * @description ベクトル同士の乗算
   * @param v ベクトル1
   * @param w ベクトル2
   * @returns 乗算した結果を返す
   */
  static multiVec = (v: Vector2, w: Vector2): Vector2 => {
    return new Vector2(v.x * w.x, v.y * w.y);
  };

  /**
   * @static Vector2の静的メソッド
   * @description スカラー割り算
   * @param v ベクトル
   * @param s スカラー
   * @returns 割り算した結果を返す
   */
  static div = (v: Vector2, s: number): Vector2 => {
    return Vector2.multi(v, 1.0 / s);
  };

  /**
   * @static Vector2の静的メソッド
   * @description ベクトル同士の割り算
   * @param v ベクトル1
   * @param w ベクトル2
   * @returns 割り算した結果を返す
   */
  static divVec = (v: Vector2, w: Vector2): Vector2 => {
    return new Vector2(v.x / w.x, v.y / w.y);
  };

  /**
   * @static Vector2の静的メソッド
   * @description 内積を求める
   * @param v ベクトル1
   * @param w ベクトル2
   * @returns 内積の結果
   */
  static dot = (v: Vector2, w: Vector2): number => {
    return v.x * w.x + v.y * w.y;
  };

  /**
   * @static Vector2の静的メソッド
   * @description 外積を求める
   * @param v
   * @param w
   * @returns 外積の結果
   */
  static cross = (v: Vector2, w: Vector2): number => {
    return v.x * w.x - v.y * w.y;
  };

  /**
   * @static Vector2の静的メソッド
   * @description 逆ベクトルを求める
   * @param v
   * @returns 逆ベクトルの結果
   */
  static inverse = (v: Vector2): Vector2 => {
    return Vector2.multi(v, -1);
  };

  /**
   * @static Vector2の静的メソッド
   * @description 
   * @param v ベクトル
   * @returns
   */
  static sqMagnitude = (v: Vector2) => {
    return v.x * v.x + v.y * v.y;
  };

  
}
