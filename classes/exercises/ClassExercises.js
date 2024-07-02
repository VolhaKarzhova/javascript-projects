// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pagesCount, checkoutCount, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pagesCount = pagesCount;
        this.checkoutCount = checkoutCount;
        this.discarded = discarded;
    }

    bookCheckout(usesCount = 1) {
        this.checkoutCount += usesCount;
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pagesCount, checkoutCount, discarded) {
        super(title, author, copyrightDate, isbn, pagesCount, checkoutCount, discarded);
    }

    discardManual(currentYear) {
        if (currentYear-this.copyrightDate > 5) {
            this.discarded = "yes";
         }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pagesCount, checkoutCount, discarded) {
        super(title, author, copyrightDate, isbn, pagesCount, checkoutCount, discarded);
    }

    discardNovel() {
        if (this.checkoutCount > 100) {
            this.discarded = "yes";
         }
    }
}


// Declare the objects for exercises 2 and 3 here:
let novel = new Novel("Pride and Prejudice", "Jane Austen", 1813, "1111111111111", 432, 32, "No");
let manual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, "0000000000000", 1147, 1, "No");

// Code exercises 4 & 5 here:
manual.discardManual(2024);
novel.bookCheckout(5);
console.log(manual);
console.log(novel);
