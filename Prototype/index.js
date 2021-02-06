function Person(name){
	this.name = name
}

Person.prototype.PI = 3.1416

var p1 = new Person("Md. A A A Ali")
var p2 = new Person("Asgor Ali")

console.log(p1)
console.log(p2)