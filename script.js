//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get rectangle(){
		return `${this.width} ${this.height}`
	}
	getArea(){
		return return `${this.width}*${this.height}`
	}
}

class Square extends Animal {

constructor(width,height,side){
	super();
	this.side=side;
	this.width=width;
	this.height=height;
}

	getPerimeter(){
		return 4*this.side
	}
	
}

const rectangle = new Rectangle(5, 10)
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.getArea());

const square = new Square(7);
console.log(square.width); 
console.log(square.height);
console.log(square.getArea());
console.log(square.getPerimeter()); 
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
