"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = exports.Door = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["BLACK"] = "Black";
    Colors["WHITE"] = "White";
    Colors["RED"] = "Red";
    Colors["SILVER"] = "Silver";
})(Colors = exports.Colors || (exports.Colors = {}));
var Door;
(function (Door) {
    Door["DRIVER"] = "Driver";
    Door["PASSENGER"] = "Passenger";
    Door["LEFT_REAR"] = "Left Rear";
    Door["RIGHT_REAR"] = "Right Rear";
})(Door = exports.Door || (exports.Door = {}));
var Direction;
(function (Direction) {
    Direction["LEFT"] = "Left";
    Direction["RIGHT"] = "Right";
})(Direction = exports.Direction || (exports.Direction = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        console.log('Bi Bi');
    }
    openTheDoor(door) {
        console.log(`Opening the ${door} door`);
    }
    closeTheDoor(door) {
        console.log(`Closing the ${door} door`);
    }
    turnOn() {
        console.log('Turn on the car');
    }
    turnOff() {
        console.log('Turn off the car');
    }
    speedUp() {
        console.log('Speeding up the car');
    }
    speedDown() {
        console.log('Speeding down the car');
    }
    stop() {
        console.log('Stoping the car');
    }
    turn(direction) {
        console.log(`Turning the car to the: ${direction}`);
    }
}
exports.default = Car;
