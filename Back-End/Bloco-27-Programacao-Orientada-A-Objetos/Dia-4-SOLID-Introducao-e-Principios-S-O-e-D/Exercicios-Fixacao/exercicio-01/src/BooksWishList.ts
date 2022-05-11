import { Book } from './types/BookType';

export default class BooksWishList {
  private wishlist: Book[] = [];

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishList = new BooksWishList();

wishList.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishList.showWishlist();