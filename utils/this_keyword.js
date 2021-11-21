const iphone13 = {
	// Properties
	name: 'iPhone 13',
	color: 'Blue',
	weight: 300,

	// Method
	takePhoto() {
		console.log(this);
	},

	objChild: {
		name: 'Child object',
		methodChild() {
			console.log(this);
		},
	},
};

iphone13.takePhoto();
iphone13.objChild.methodChild();

function Car(name, color, weight) {
	this.name = name;
	this.color = color;
	this.weight = weight;
	this.run = function () {
		console.log('Running...', this);
	};
}

const mercedesS450 = new Car('Mercedes S450', 'black', 1000);
mercedesS450.run();

// DOM
const button = document.querySelector('button');
button.onclick = function () {
	console.log(this);
	console.log(this.innerText);
};
