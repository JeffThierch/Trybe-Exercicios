"use strict";
class Superclass {
    constructor(isSuper) {
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
const superClass = new Superclass(true);
const subClass = new Subclass();
myFunc(superClass);
myFunc(subClass);
