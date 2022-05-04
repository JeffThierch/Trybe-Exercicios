interface Logger {
  log: (x: string) => void
}

class ConsoleLogger implements Logger {
  log(logString: string) {
    console.log(logString, 'ConsoleLogger1');
  }
}

class ConsoleLogger2 implements Logger {
  log(logString: string) {
    console.log(logString, 'ConsoleLogger2')
  }
}

interface Database {
  logger: Logger;
  save: (key: string, value: string) => void
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger) {}
  save(key: string, value: string) {
    this.logger.log(`${key}: ${value}`)
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();

db1.save('foo', "bar")
db2.save('foo', "bar")
db3.save('foo', "bar")