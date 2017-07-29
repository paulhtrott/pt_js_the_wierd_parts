// Function Statements and Expressions
//

var a;

// if is a statement, it doesn't return a value it just does work.
// a === 3 is an expression, because it returns a value
if (a === 3) {

}

// can call greet before it is declared because function statements are hoisted.
greet();
// doesn't return a value until the function is invoked, so this is a function statement
function greet() {
  console.log('hi');
}

// creating an object (function is an object) on the fly
// still get a function object in memory - name is anonymous beccause the function has no name
// the variable name is pointing to the address where the function lives in memory
// this is a function expression!
// this is NOT hoisted, because javascript sees a variable, all variables are set to undefined BEFORE code is run
// only the variable is hoisted, and set to undefined by the javascript engine
var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet();

// Function can be passed to another function, just like variables
// this is functional programming
// Functions in javascript are objects
function log(a) {
  a();
}

log(function() {
 console.log('hi');
});






