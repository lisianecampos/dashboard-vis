export class PieData {
  constructor(type: string, quantity: number) {
    return new PieData(type, quantity);
  }

  name!: string;
  y!: number;
}
