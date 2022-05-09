"use strict";
class Student {
    constructor(registration, name, scores, workScores) {
        this.registration = registration;
        this.name = name;
        this.scores = scores;
        this.workScores = workScores;
    }
    get getRegistration() {
        return this.registration;
    }
    sumScores() {
        const allScores = [...this.scores, ...this.workScores];
        return allScores.reduce((previousScore, currentScore) => (previousScore + currentScore), 0);
    }
    calcAverageScore() {
        const quantityOfScores = (this.scores.length + this.workScores.length);
        const totalScore = this.sumScores();
        return totalScore / quantityOfScores;
    }
}
