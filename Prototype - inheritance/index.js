function Shape(){
	
}

Shape.prototype = {
	common: function(){
		console.log('I am Common Method')
	}
}

function Square(width){
	this.width = width
}

Square.prototype = Object.create(Shape.prototype)

Square.prototype.draw = function(){
	console.log('Drawing')
}

var shape = new Shape()
var sqr = new Square(45)

//var s1 = new Square(45)

function Circle(){

}

Circle.prototype = Object.create(shape.prototype)

var cicle = new Circle()