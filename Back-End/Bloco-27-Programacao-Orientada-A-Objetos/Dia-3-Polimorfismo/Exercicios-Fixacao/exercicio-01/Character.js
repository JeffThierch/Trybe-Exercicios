"use strict";
class Character {
}
class MeleeCharacter extends Character {
    talk() {
        console.log('I`m a melee character.');
    }
    specialMove() {
        console.log('The Wall!!!!');
    }
}
class LongRangeCharacter extends Character {
    talk() {
        console.log('I`m a long range character');
    }
    specialMove() {
        console.log('Sniper Attack!!');
    }
}
function myCharacter(character) {
    character.talk();
    character.specialMove();
}
const melee = new MeleeCharacter();
const range = new LongRangeCharacter();
myCharacter(melee);
myCharacter(range);
