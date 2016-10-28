// console.log("hello world")

// var numArray = [6, 7, 8, 9]

// console.log(numArray)

// 	var num1 = addVariables(5, 10)
// function addVariables(a, b) {
	
// 	return (5 + 10)
// }
// console.log(num1)

// var num1 = multiplyNum(4, 6)

// function multplyNum(a, b) {
// 	return (a * b)
// }
// console.log(num1)

var username = prompt("what's your name?")
var bob = "bob"
var alice = "alice"
if(username == bob || username == alice) {
	document.write("welcome " + username)
} else if (username == "alice") {
	alert("awesome")
} else {
	alert("go away " + username + " nobody likes you!")
}
