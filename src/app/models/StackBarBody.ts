export class StackBarBody {
  start!: string;
  end!: string;
  temas: string[] = [];

  constructor(start: string, end: string, temas: string[]) {
    this.start = start;
    this.end = end;
    this.temas = temas;
  }
}
