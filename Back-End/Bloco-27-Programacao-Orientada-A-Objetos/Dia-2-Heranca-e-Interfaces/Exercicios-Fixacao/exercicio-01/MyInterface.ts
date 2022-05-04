interface MyInterface {
  myNumber: number;
  myFunc: (myParam: number) => string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number){}

  myFunc(myParam: number) {
    return (this.myNumber + myParam).toString();
  }
}

const myObj = new MyClass(20)

console.log(myObj.myFunc(10));