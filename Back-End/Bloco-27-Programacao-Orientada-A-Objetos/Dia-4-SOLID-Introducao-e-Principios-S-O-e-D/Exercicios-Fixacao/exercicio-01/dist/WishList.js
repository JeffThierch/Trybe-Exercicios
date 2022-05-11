"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WishList {
    constructor() {
        this.wishlist = [];
    }
    addToWishlist(book) {
        this.wishlist.push(book);
    }
    showWishlist() {
        console.log(this.wishlist);
    }
}
exports.default = WishList;
const wishList = new WishList();
wishList.addToWishlist({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishList.showWishlist();
