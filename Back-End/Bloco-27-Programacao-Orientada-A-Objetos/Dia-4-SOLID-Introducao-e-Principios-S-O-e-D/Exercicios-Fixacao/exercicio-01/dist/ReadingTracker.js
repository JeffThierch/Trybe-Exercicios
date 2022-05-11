"use strict";
/* eslint-disable class-methods-use-this */
class ReadingTracker {
    constructor(readingGoal) {
        this.readingGoal = readingGoal;
        this.booksRead = 0;
        this.wishlist = [];
    }
    compareBooksReadWithReadingGoal() {
        return (this.booksRead >= this.readingGoal) ? (this.progressNotification('Congratulations! You\'ve reached your reading goal!')) : (this.progressNotification('There are still some books to go!'));
    }
    trackReadings(readsCount) {
        this.booksRead += readsCount;
        this.compareBooksReadWithReadingGoal();
    }
    addToWishlist(book) {
        this.wishlist.push(book);
    }
    showWishlist() {
        console.log(this.wishlist);
    }
    progressNotification(message) {
        console.log(message);
    }
}
const readTracker = new ReadingTracker(20);
readTracker.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
readTracker.showWishlist();
readTracker.trackReadings(12);
readTracker.trackReadings(9);
