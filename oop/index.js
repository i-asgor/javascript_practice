var rect = {
	width: 100,
	height:50,

	draw: function(){
		console.log(" I am a rectangle")
		this.printproperties()
	},

	printproperties: function(){
		console.log("MY width is : " + this.width)
		console.log("My height is : " + this.height)
	}
}

rect.draw()

var createrect = function(a,b){
	return {
	width: a,
	height:b,

	draw: function(){
		console.log(" I am a rectangle")
		this.printproperties()
	},

	printproperties: function(){
		console.log("MY width is : " + this.width)
		console.log("My height is : " + this.height)
	}
}
}

var rect1 = createrect(10,5)
rect1.draw()


var Rectangle = function(width, height){
	this.width = width
	this.height = height

	this.draw = function(){
		console.log("I am a rectangle")
		this.printproperties()
		// console.log(this)
	}

	this.printproperties = function(){
		console.log('My width is ' + this.width)
		console.log('My height is ' + this.height)
	}
}

var rect3 = new Rectangle(1000,254)
rect3.draw()
// rect.height =200

// rect.draw()

// function myFunc(){
// 	console.log(this)
// }
// new myFunc()

// var another = {
// 	width: 47,
// 	height: 60,
// 	print: rect.printproperties
// }

// another.print()

function myFunc(){
	console.log(this)
	console.log(this.a + this.b)
}

myFunc.call({a:10,b:55})


