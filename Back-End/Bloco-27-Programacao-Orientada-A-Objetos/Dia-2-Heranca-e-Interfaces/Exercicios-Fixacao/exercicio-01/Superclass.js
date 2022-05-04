"use strict";
class Superclass {
    constructor() {
        this.isSuper = true;
    }
    sayHello() {
        console.log('Ola mundo!');
    }
}
class Subclass extends Superclass {
}
function myFunc(obj) {
    obj.sayHello();
}
const superClass = new Superclass();
const subClass = new Subclass();
myFunc(superClass);
myFunc(subClass);
