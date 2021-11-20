// ES5
// Constructor
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// Get summary
Book.prototype.getSummary = function () {
	return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Create magazine to inherit the book

// Magazine Constructor
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);

	this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Book.prototype);

// Use magazine constructor
Magazine.prototype.constructor = Magazine;

// Instantiate Magazine Object
const mag1 = new Magazine('Magazine 1', 'Pep', 1995, 'December');
console.log(mag1);
console.log(mag1.getSummary());
