import { Evaluation } from "./abstract/Evaluation";

export class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this._score = score;
    this._evaluation = evaluation;
  }

  get evaluation(): Evaluation {
    return this._evaluation
  }

  set evaluation(value: Evaluation) {
    this.evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if(value < 0) {
      throw new Error('The score should be positive')
    }

    this._score = value;
  }
}