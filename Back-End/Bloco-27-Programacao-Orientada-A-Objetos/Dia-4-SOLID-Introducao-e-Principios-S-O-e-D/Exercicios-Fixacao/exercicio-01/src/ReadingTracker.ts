import progressNotification from './notifications';

class ReadingTracker {
  private readingGoal: number;

  private booksRead: number;

  constructor(readingGoal: number) {
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  private sendNotificationBasedOnReadingGoal(): void {
    if (this.booksRead >= this.readingGoal) {
      return progressNotification('Congratulations! You\'ve reached your reading goal!');
    }

    return progressNotification('There are still some books to go!');
  }

  trackReadings(readsCount: number) {
    this.booksRead += readsCount;
    this.sendNotificationBasedOnReadingGoal();
  }
}

const readTracker = new ReadingTracker(20);

readTracker.trackReadings(12);
readTracker.trackReadings(9);