// Framework Aside - things you might see in a framework
// Faking Namespaces

var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet); //outputs Hola!

// just a container, no real functionality
var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);
console.log(spanish);

english = {
  greetings: {
    basic: 'Hello!'
  }
}

console.log(english);
