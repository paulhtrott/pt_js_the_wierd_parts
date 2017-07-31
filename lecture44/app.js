// Immediately Invoked Function Expressions

// function statement
function greet(name) {
  console.log('Hello ' + name);
}

greet('John');

// function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};

greetFunc('Paul');

// invoked function expression, immediately after creation
var greeting = function(name) {
  return 'Hello ' + name;
}('Nick');

console.log(greeting); //=> returns a string 'Hello Nick'

// When you want an expression, something that returns a value
// the () force javascript parser to believe the function is an expression
(function(name) {
  return 'Hello ' + name;
});

// can also be an immediately invoked function expression
// classic example of an IIFE
// This style is in every major framework and library
// This is just executing code on the fly
var firstname = 'Peter';

(function(name) {
  var greeting = 'Inside IIFE - Hello ';
  console.log(greeting + name);
}(firstname));


