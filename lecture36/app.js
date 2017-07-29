// by value ( all primitive types)
var a = 3;
var b;

b = a;

a = 2;

console.log(a); //=> 2
console.log(b); //=> 3

// by reference (all objects (including functions))
// both are pointed to the same location in memory
var c = { greeting: 'hi' };
var d;

d = c;

c.greeting = 'bye';

console.log(c); //=> greeting is now bye
console.log(d); //=> greeting is now bye

// by referece (even as a parameter)
function changeGreeting(object) {
  object.greeting = 'Hola';
}

changeGreeting(d);

console.log(c); //=> greeting is Hola
console.log(d); //=> greeting is Hola

// equals operator (=) sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c); //=> greeting is howdy
console.log(d); //=> greeting is Hola
