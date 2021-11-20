// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// // console.log(window);
// // window.alert();

// console.log(navigator.appVersion);

const book1 = {
	title: 'Book One',
	author: 'John Doe',
	year: 2013,
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
};

const book2 = {
	title: 'Book Two',
	author: 'Tung Leo',
	year: 2018,
	getSummary: function () {
		return `${this.title} was written by ${this.author} in ${this.year}`;
	},
};

console.log(book1.title);
console.log(book1.getSummary());

console.log(book2.title);
console.log(book2.getSummary());

// See all values of object
console.log(Object.keys(book2));
console.log(Object.values(book2));

// TODO: Will need constructor to make defining objects more easier
// -> Next
