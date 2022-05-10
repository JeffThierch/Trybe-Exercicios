"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationResult = void 0;
class EvaluationResult {
    constructor(evaluation, score) {
        this._score = score;
        this._evaluation = evaluation;
    }
    get evaluation() {
        return this._evaluation;
    }
    set evaluation(value) {
        this.evaluation = value;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0) {
            throw new Error('The score should be positive');
        }
        this._score = value;
    }
}
exports.EvaluationResult = EvaluationResult;
