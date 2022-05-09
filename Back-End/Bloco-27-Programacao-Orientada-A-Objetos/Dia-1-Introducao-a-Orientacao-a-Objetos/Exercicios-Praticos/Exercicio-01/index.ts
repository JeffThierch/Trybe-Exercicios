type TestScores = [number, number, number, number]
type WorkScores = [number, number,]

class Student {
  constructor(
    private registration: string, 
    public name: string, 
    private scores: TestScores, 
    private workScores: WorkScores) {}

  get getRegistration() {
    return this.registration;
  }

  sumScores(): number {
    const allScores = [...this.scores, ...this.workScores];

    return allScores.reduce((previousScore, currentScore) => ( previousScore + currentScore ), 0);
  }

  calcAverageScore(): number {
    const quantityOfScores = (this.scores.length + this.workScores.length);
    const totalScore = this.sumScores();

    return totalScore / quantityOfScores;
  }
}