class Superclass {
  public isSuper: boolean

  constructor() {
    this.isSuper = true;
  }

  protected sayHello() {
    console.log('Ola mundo!');
  }
}

class Subclass extends Superclass {
  sayHello2() {
    this.sayHello()
  }
}

function myFunc(obj: Subclass) {
  obj.sayHello2();
}

/* const superClass = new Superclass(); */
const subClass = new Subclass();

/* myFunc(superClass); */
myFunc(subClass);