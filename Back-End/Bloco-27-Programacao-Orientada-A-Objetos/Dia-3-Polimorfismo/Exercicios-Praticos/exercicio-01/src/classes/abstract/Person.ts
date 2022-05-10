export abstract class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name;
    this.birthDate = _birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('The name must contain at least 3 characteres.')
    }

    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const dateDiff = Math.abs(new Date().getTime() - value.getTime());

    const yearInMs = 31536000000;

    return Math.floor(dateDiff / yearInMs);
  }

  private validateBirthDate(value: Date): void {
    if(value.getTime() > new Date().getTime()) {
      throw new Error('The birthDate cannot be a future date');
    }

    if(Person.getAge(value) > 120) {
      throw new Error('The person must be at least 120 years old')
    }
  }
}