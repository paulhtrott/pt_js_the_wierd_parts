// IIFE
var firstname = 'Peter';

(function(name) {
  var greeting = 'Hello ';
  console.log(greeting + name);
}(firstname));

console.log(greeting);

// Effect global context
firstname = 'Bromby';

(function(global, name) {
  var greeting = 'Hello '; //=> does not touch global context greeting variable
  global.greeting = 'Howdy!'; // add a variable to the global window
  console.log(greeting + name);
}(window, firstname)); // the code wrapped in parenthesis and function expression is protected

console.log(greeting);
