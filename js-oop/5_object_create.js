// Object of Protos
const booksProtos = {
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
	getAge: function () {
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} years old`;
	},
};

// Create Object
const book1 = Object.create(booksProtos);
book1.title = 'Book One';
book1.author = 'Xavi';
book1.year = 2013;
console.log(book1);

const book2 = Object.create(booksProtos, {
	title: { value: 'Book Two' },
	author: { value: 'Iniesta' },
	year: { value: 2019 },
});

console.log(book2);

