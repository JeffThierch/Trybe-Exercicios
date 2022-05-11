export class Flute {
  constructor(public name: string) { }
  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

/* Exemplo Dependencia com alto acoplamento

export class Musician {
  flute: Flute;

  constructor(public name: string) {

    a classe Flute e instanciada sempre q geramos um musico, tornando o codigo dificl de testar e com alto acoplamento;

    this.flute = new Flute('minha flauta');
  }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const musician = new Musician('Márcia');
musician.play();

*/

// Injecao de dependencias

export default class Musician {
  
  // Agora a flauta é recebida como parâmetro

  constructor(
    public name: string,
    public flute: Flute,
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const flute = new Flute('Minha flauta');
const musician = new Musician('Márcia', flute);
musician.play();
