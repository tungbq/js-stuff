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

// Get age
Book.prototype.getAge = function () {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
	this.year = newYear;
	this.revised = true;
};

// Instatiate an object
const book1 = new Book('Book One', 'Messi', 2010);
const book2 = new Book('Book Two', 'DR Strange', 1995);

console.log(book1);
console.log(book1.getSummary());

console.log(book2);
console.log(book2.getSummary());

console.log(book2);
console.log(book2.getAge());

console.log(book2);
book2.revise(2020);
console.log(book2);

// TODO: Next :: Inheritance

