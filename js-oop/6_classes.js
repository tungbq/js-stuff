class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	}

	getAge() {
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old`;
	}

	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}

	// Static method then be used without instantiate like: Book.topBooksStore(), not book1.topBooksStore()
	// Use with instantiate object will cause error
	static topBooksStore() {
		return 'Barnes & Noble';
	}
}

// Instantiate Object

const book1 = new Book('Book One', 'Ronaldo', 2021);

console.log(book1);
console.log(book1.getSummary());

book1.revise(2222);
console.log(book1);

console.log(Book.topBooksStore());
