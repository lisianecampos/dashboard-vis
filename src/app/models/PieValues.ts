export class PieValues {
  private _name!: string;
  private _y!: number;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }
}

