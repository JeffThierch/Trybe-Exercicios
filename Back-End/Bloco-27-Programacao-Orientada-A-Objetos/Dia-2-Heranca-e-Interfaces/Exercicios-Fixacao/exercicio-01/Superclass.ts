class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true;
  }

  sayHello() {
    console.log('Ola mundo!');
  }
}

class Subclass extends Superclass {}

function myFunc(obj: Superclass) {
  obj.sayHello();
}

const superClass = new Superclass();
const subClass = new Subclass();

myFunc(superClass);
myFunc(subClass);