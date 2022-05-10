import { Teacher } from "../Teacher";


export abstract class Evaluation {
  private _score: number;
  private _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this._score = score;
    this._teacher = teacher;
  }

  get score(): number {
    return this._score
  }

  set score(value: number) {
    if(value < 0) {
      throw new Error("The score cannot be a negative number");
    }
    
    this._score = value;
  }

  get teacher(): Teacher {
    return this._teacher
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

}