import { Evaluation } from "./Evaluation";
import { Teacher } from "./Teacher";

export class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);
  }

  set score(value: number) {
    if(this.score > 25) {
      throw new Error('The score should be shorter than 25pts.')
    }

    super.score = value;
  }
}