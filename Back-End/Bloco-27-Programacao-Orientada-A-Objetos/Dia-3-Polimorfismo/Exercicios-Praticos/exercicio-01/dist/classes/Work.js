"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = void 0;
const Evaluation_1 = require("./Evaluation");
class Work extends Evaluation_1.Evaluation {
    constructor(score, teacher) {
        super(score, teacher);
    }
    set score(value) {
        if (value > 50) {
            throw new Error('The score should be shorter than 50pts.');
        }
        super.score = value;
    }
}
exports.Work = Work;
