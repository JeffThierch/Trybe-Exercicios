"use strict";
class ConsoleLogger {
    log(logString) {
        console.log(logString, 'ConsoleLogger1');
    }
}
class ConsoleLogger2 {
    log(logString) {
        console.log(logString, 'ConsoleLogger2');
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`${key} : ${value}`);
    }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const db1 = new ExampleDatabase(logger1);
const db2 = new ExampleDatabase(logger2);
const db3 = new ExampleDatabase();
db1.save('foo', "bar");
db2.save('foo', "bar");
db3.save('foo', "bar");
