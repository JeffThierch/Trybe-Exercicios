export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('The name must be at least 3 characters long');
    }

    this._name = value;
  }
}