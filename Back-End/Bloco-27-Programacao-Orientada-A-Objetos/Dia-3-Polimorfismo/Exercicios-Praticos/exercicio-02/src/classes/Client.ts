export class Client {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve possuir no minimo 3 caracteres')
    }

    this._name = value;
  }
}