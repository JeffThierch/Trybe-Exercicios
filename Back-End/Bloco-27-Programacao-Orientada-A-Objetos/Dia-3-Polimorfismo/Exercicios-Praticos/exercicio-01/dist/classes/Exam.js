"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
const Evaluation_1 = require("./abstract/Evaluation");
class Exam extends Evaluation_1.Evaluation {
    constructor(score, teacher) {
        super(score, teacher);
    }
    set score(value) {
        if (this.score > 25) {
            throw new Error('The score should be shorter than 25pts.');
        }
        super.score = value;
    }
}
exports.Exam = Exam;
