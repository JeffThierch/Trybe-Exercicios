export enum Colors {
  BLACK = 'Black',
  WHITE = 'White',
  RED = 'Red',
  SILVER = 'Silver'
}

export enum Door {
  DRIVER = 'Driver',
  PASSENGER = 'Passenger',
  LEFT_REAR = 'Left Rear',
  RIGHT_REAR = 'Right Rear'
}

export enum Direction {
  LEFT = 'Left',
  RIGHT = 'Right'
}

interface Car {
  brand: string;
  color: Colors;
  doors: number;
  honk():void;
  openTheDoor(door: Door):void;
  closeTheDoor(door: Door):void;
  turnOn():void;
  turnOff():void;
  speedUp():void;
  speedDown():void;
  stop():void;
  turn(direction: Direction):void;
}

class Car {

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk(): void {
    console.log('Bi Bi');
  }

  openTheDoor(door: Door): void {
    console.log(`Opening the ${door} door`)
  }

  closeTheDoor(door: Door): void {
    console.log(`Closing the ${door} door`)
  }

  turnOn(): void {
    console.log('Turn on the car');
  }

  turnOff(): void {
    console.log('Turn off the car')
  }

  speedUp(): void {
    console.log('Speeding up the car');
  }

  speedDown(): void {
    console.log('Speeding down the car');
  }

  stop(): void {
    console.log('Stoping the car')
  }

  turn(direction: Direction): void {
    console.log(`Turning the car to the: ${direction}`);
  }
}

export default Car;