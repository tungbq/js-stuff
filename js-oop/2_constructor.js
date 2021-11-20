// ES5
// Constructor
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	};
}

// Instatiate an object
const book1 = new Book('Book One', 'Messi', 2010);
const book2 = new Book('Book Two', 'DR Strange', 1995);

console.log(book1);
console.log(book1.getSummary());

// TODO: Next prototype
