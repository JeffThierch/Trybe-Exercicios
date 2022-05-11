"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notifications_1 = __importDefault(require("./notifications"));
class ReadingTracker {
    constructor(readingGoal) {
        this.readingGoal = readingGoal;
        this.booksRead = 0;
    }
    sendNotificationBasedOnReadingGoal() {
        if (this.booksRead >= this.readingGoal) {
            return (0, notifications_1.default)('Congratulations! You\'ve reached your reading goal!');
        }
        return (0, notifications_1.default)('There are still some books to go!');
    }
    trackReadings(readsCount) {
        this.booksRead += readsCount;
        this.sendNotificationBasedOnReadingGoal();
    }
}
const readTracker = new ReadingTracker(20);
readTracker.trackReadings(12);
readTracker.trackReadings(9);
