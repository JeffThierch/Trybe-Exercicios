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
    sayHello2() {
        this.sayHello();
    }
}
function myFunc(obj) {
    obj.sayHello2();
}
/* const superClass = new Superclass(); */
const subClass = new Subclass();
/* myFunc(superClass); */
myFunc(subClass);
