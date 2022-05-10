import { Evaluation } from "./Evaluation";
import { Teacher } from "./Teacher";

export class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher)
  }

  set score(value: number) {
    if(value > 50) {
      throw new Error('The score should be shorter than 50pts.')
    }

    super.score = value;
  }
}