abstract class Character {
  abstract talk(): void
  abstract specialMove(): void
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('I`m a melee character.')
  }

  specialMove(): void {
      console.log('The Wall!!!!')
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
      console.log('I`m a long range character')
  }

  specialMove(): void {
      console.log('Sniper Attack!!');
  }
}

function myCharacter(character: Character) {
  character.talk();
  character.specialMove();
}

const melee = new MeleeCharacter();
const range = new LongRangeCharacter();

myCharacter(melee);
myCharacter(range);