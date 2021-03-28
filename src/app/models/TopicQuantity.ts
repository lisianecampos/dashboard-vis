export class TopicQuantity {
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get data(): string[] {
    return this._data;
  }

  set data(value: string[]) {
    this._data = value;
  }
  private _name!: string;
  private _data!: string[];
}
