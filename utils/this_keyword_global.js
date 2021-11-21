// 'use strict';
console.log(this);

function myFunc() {
	console.log(this);
}

myFunc();
window.myFunc();

// SUMARRY
function Car(name, color) {
	this.name = name;
	this.color = color;

	this.run = function () {
		console.log(this);
	};
}

Car.prototype.run1 = function () {
	// Context
	function test() {
		console.log('context test', this);
	}
	test();
};

Car.prototype.runArrow = function () {
	// Context
  // With arrow function, refer to recent object 'this'
	const testArrow = () => {
		console.log('context test 2', this);
	};
	testArrow();
};

const porsche = new Car('Porsche', 'Yellow');
const mercedesS450 = new Car('mercerdesS450', 'Black');

console.log(porsche);
console.log(porsche.name);
porsche.run();

console.log(mercedesS450);
console.log(mercedesS450.name);
mercedesS450.run();

mercedesS450.run1();
mercedesS450.runArrow();
