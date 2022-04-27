import Car, { Colors, Door, Direction } from './Car'

function main() {
  const newCar = new Car('Volkswagen Gol', Colors.SILVER, 4 )

  newCar.openTheDoor(Door.DRIVER);
  newCar.closeTheDoor(Door.DRIVER);
  newCar.turnOn();
  newCar.speedUp();
  newCar.turn(Direction.LEFT);
  newCar.speedUp();
  newCar.speedDown();
  newCar.turn(Direction.RIGHT);
  newCar.speedUp();
  newCar.speedDown();
  newCar.turn(Direction.RIGHT);
  newCar.speedUp();
  newCar.speedDown();
  newCar.stop();
  newCar.honk();
  newCar.openTheDoor(Door.PASSENGER);
  newCar.closeTheDoor(Door.PASSENGER);
  newCar.speedUp();
  newCar.speedDown();
  newCar.turn(Direction.RIGHT);
  newCar.speedUp();
  newCar.speedDown();
  newCar.turn(Direction.LEFT);
  newCar.speedUp();
  newCar.speedDown();
  newCar.turn(Direction.RIGHT);
  newCar.speedUp();
  newCar.speedDown();
  newCar.stop();
  newCar.openTheDoor(Door.PASSENGER);
  newCar.closeTheDoor(Door.PASSENGER);
  newCar.speedUp();
}

main()