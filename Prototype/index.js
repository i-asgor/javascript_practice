//function Person(name){
//	this.name = name
//}

//Person.prototype.PI = 3.1416

//var p1 = new Person("Md. A A A Ali")
//var p2 = new Person("Asgor Ali")

//console.log(p1)
//console.log(p2)


function Square(width){
	this.width = width
}

Square.prototype = {
	draw: function(){
		console.log("draw")
	},
	toString: function(){
		return 'My width is = '+ this.width
	}
}


var sqr1 = new Square(10)
var sqr2 = new Square(5)
