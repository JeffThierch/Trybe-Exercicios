"use strict";
class Superclass {
    constructor(isSuper = true) {
        this.isSuper = isSuper;
    }
    sayHello() {
        console.log('Ola mundo!');
    }
}
class Subclass extends Superclass {
    constructor() {
        super(false);
    }
}
function myFunc(obj) {
    if (obj.isSuper) {
        return console.log('Super!');
    }
    return console.log('Sub!');
}
const superClass = new Superclass();
const subClass = new Subclass();
myFunc(superClass);
myFunc(subClass);
