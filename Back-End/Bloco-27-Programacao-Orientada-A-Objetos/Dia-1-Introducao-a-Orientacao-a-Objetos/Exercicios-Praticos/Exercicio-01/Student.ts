class Student {
    private _registration: string;
    private _name: string; 
    private _examsGrades: number[]; 
    private _worksGrades: number[];
  constructor(registration: string, name: string) {
    this._registration = registration;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get registration() {
    return this._registration;
  }

  set registration(value: string) {
    this._registration = value
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if(value.length < 3) {
      throw new Error('O nome deve conter no minimo 3 caracteres');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if(value.length > 4) {
      throw new Error('A pessoa estudante so pode possuir 4 notas de provas.');
    }
    
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._examsGrades;
  }

  set worksGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('A pessoa estudante so pode possuir 2 notas de trabalhos.');
    }

    this._examsGrades = value;
  }

  sumGrades(): number {
    const allScores = [...this._examsGrades, ...this._worksGrades];

    return allScores.reduce((previousScore, currentScore) => ( previousScore + currentScore ), 0);
  }

  calcAverageGrades(): number {
    const quantityOfScores = (this._examsGrades.length + this._worksGrades.length);
    const totalScore = this.sumGrades();

    return totalScore / quantityOfScores;
  }
}