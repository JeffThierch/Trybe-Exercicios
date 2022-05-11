type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class WishList {
  private wishlist: Book[] = [];

  addToWishlist(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishList = new WishList();

wishList.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishList.showWishlist();