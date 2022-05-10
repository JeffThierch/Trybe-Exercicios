"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluation = void 0;
class Evaluation {
    constructor(score, teacher) {
        this._score = score;
        this._teacher = teacher;
    }
    get score() {
        return this._score;
    }
    set score(value) {
        if (value < 0) {
            throw new Error("The score cannot be a negative number");
        }
        this._score = value;
    }
    get teacher() {
        return this._teacher;
    }
    set teacher(value) {
        this._teacher = value;
    }
}
exports.Evaluation = Evaluation;
