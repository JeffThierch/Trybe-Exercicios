const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const dragonAttack = () => {
  const minAttack = 15
  const maxAttack = dragon.strength
  return Math.floor(Math.random() * (maxAttack - minAttack + 1)) + minAttack;
}

const warriorAttack = () => {
  const minAttack = warrior.weaponDmg;
  const maxAttack = warrior.strength;
  return Math.floor(Math.random() * (maxAttack - minAttack + 1)) + minAttack;
}

const mageAttack = () => {
  const minAttack = mage.intelligence;
  const maxAttack = mage.intelligence * 2;
  const mageDamage = Math.floor(Math.random() * (maxAttack - minAttack + 1)) + minAttack;
  const mageManaConsumption = 15;

  if (mage.mana < mageManaConsumption) {
    return 'Não possui mana suficiente'
  }

  return {damage: mageDamage, manaSpent: mageManaConsumption };
}

const battleMembers = { mage, warrior, dragon };


const gameActions = {
  warriorTurn: (warriorAttack) => {
    const damage = warriorAttack()
    warrior.damage = damage
    dragon.healthPoints -= damage;
  },
  mageTurn: (mageAttack) => {
    const attackStats = mageAttack()
    mage.damage = attackStats.damage
    mage.mana -= attackStats.manaSpent
    dragon.healthPoints -= mage.damage
  }
};

gameActions.warriorTurn(warriorAttack)
gameActions.mageTurn(mageAttack)

