"use strict";
class MyClass {
    constructor(myNumber) {
        this.myNumber = myNumber;
    }
    myFunc(myParam) {
        return (this.myNumber + myParam).toString();
    }
}
const myObj = new MyClass(20);
console.log(myObj.myFunc(10));
