# Global Execution Context Phases
## PHASE 1
### Execution Context is Created (CREATION PHASE)
Creates Global Object - this - Outer Environment
Sets up Memory Space for Variables and Functions "Hoisting"

Functions in entirety are stored in memory
Variable assignments are given place holders and set to undefined until run time
Always best to put variables and functions at top.

```javascript
b();

console.log(a);

var a = 'Hello World';

function b() {
  console.log('Called b!');
}

console.log(a);

/*
the var a above is undefined because var a
is set to undefined due to hoisting. b function
outputs because functions are fully loaded into memory.
*/
```

## PHASE 2
### Execution Context is Executed (EXECUTION PHASE)
Executes code line by line

# Javascript Concepts
Javascript is...

Single Threaded:
One Command at a time
Javascript is single threaded

Synchronous:
One at a time, one line at a time and in order


# Variable Environments
Where the variables live, and how they relate to each other in memory

# Scope
Where a variable is available in your code

# Let
can use let instead of var
let allows for block scoping

# Asynchronous (Callbacks)
more than one at a time (javascript is synchronous)
There are other engines outside of the javascript engine.
Rendering engine, HTTP Request engine. Javascript Engine is synchronous.
Event Queue (notifications, events) - the browser places events on the queue (ie. click event, HTTP Request), gets looked at when the execution context is empty. Then creates a context for the clickHandler event. The browser asynchronously puts events in the event queue, but javascript engine is still executing synchronously.

# Dynamic Typing
You don't tell the engine what type of data a variable holds,
it figures it out while your code is running.

## Primitive Type
A type of data that represents a single value, that is not an object

### Six Primitive Types
* undefined - lack of existence
* null - represents lack of existence (you can set a variable to this)
* boolean - true or false
* number - floating point number, there is always a decimal, makes math weird
* string - a sequence of characters
* symbol - used in ES6 (not supported by all browsers)

# Coercion
Converting a value from one type to another (for example: convert string to number)

```javascript

var a = 1 + '2';
/*
  treated as if two strings, 1 is coerced
  coercion converted 1 to '1'
  Javascript engine tries to guess what you want
*/
  console.log(a); //outputs '12'

```

## Comparison Operators
99% of the time should be using ===/!==
===/!== should be your default

* use Object.is, if available

```javascript

console.log(3 < 2 < 1); // returns true
// 3 < 2 returns false
// false < 1, coercion does Number(false) which is 0, 0 < 1, returns true

console.log(1 < 2 < 3); // returns true
// 1 < 2 is true, true is 1, 1 < 3, returns true

Number(undefined) // NaN
Number(null) // 0
Number("") // 0

3 == 3 //=> true
3 == '3' //=> true
false == 0 //=> true
null == 0 //=> false - null not coerced in comparison using ==

// triple === does not coerce
false === 0 //=> false
'3' === 3 //=> false
'3' === '3' //=> true

```

### Existence and Booleans

```javascript

Boolean(null) //=> false
Boolean(undefined) //=> false
Boolean("") //=> false
Boolean(NaN) //=> false
Boolean(0) //=> false

var a;
// goes out to internet the looks for a value,
// if a is any of the above, it will be false
// a = the return value

a = "found it";
//if a equaled 0, assuming that was a valid return value, have to check for that value
a = 0;

if (a || a === 0) {
  console.log("something is there");
}

```

### Default Values

```javascript

function greet(name) {
  console.log('Hello' + name);
}

greet(); // outputs 'Hello undefined', thanks to coercion

function greet(name) {
  name = name || "Paul T."; // if name does not exist, give me something different back
  console.log('Hello' + name);
}

greet(); // outputs 'Paul T.', thanks to coercion

```

#### Framework Default Values

```javascript

// Stop Clashing
// Javascript Frameworks could collide with one another
// Should check Global Object before name collions are caused, exclude yourself, and don't override if it exists

// In this case, checking to see if libraryName variable is already set on the Global Object,
// if it is, leave it alone, if not, change it as you see fit

window.libraryName = window.libraryName || "Lib 2";

```

# Objects and Functions
## Objects and the dot
An Object is a collection of key/value pairs, sitting in memory
Object can have a Primitive (property), Another Object (property), Functions (method)
Each property/method has references in memory.

```javascript

var person = new Object(); // better ways to do this, this is example for now
person["firstname"] = "Tony";
person["lastname"] = "Trott";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object(); // not the preferred way to instantiate an object

person.address.street = "1004 Road Street";
person.address.city = "New York";
person.address.state = "New York";
person.address.zipcode = "90210";

console.log(person.address);
console.log(person['address']['state']);

```

```javascript

// Object literal Syntax

var person = {}; // object literal - short hand to call new Object();

var person = { firstname: 'Tony', lastname: 'Trott' }; // object literal - short hand to call new Object(); and initialize with values

var person = {
  firstname: 'Tony',
  lastname: 'Trott',
  address: {
    street: '123 Fancy Street',
    city: 'Newark',
    state: 'New Jersey'
  }
}; // preferred way to create an object

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({
  firstname: 'Nicki',
  lastname: 'Jane'
});

Tony.address2 = {
  street: '9 Fancy Road'
}

console.log(Tony);

```

# Faking Namespaces
Namespace is a container for variables and functions, keeps variables and functions with same name seperate.
Javascript doesn't have namespaces, so it is faked

```javascript

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

```

# JavaScript Object Notation (JSON)
JSON is inspired by object literals, but they are not the exact same thing.

```javascript

// NOT the same thing, just Similar

var objectLiteral = {
  firstname: 'Mary',
  isAProgrammer: true
}

console.log(objectLiteral);

// property names have to be  wrapped in quotes for JSON
// valid JSON
// {
//   "firstname": "Jane",
//   "isAProgrammer": true
// }

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true }');

console.log(jsonValue);

```

# Functions Are Objects
First Class Functions, everything you can do with other types you can do with functions
Can assign them to variables, pass them around and create them on the fly
A function is just a special type of object, can attache a Primitive, Object, Function, Can have a Name (optional: can be anonymous), Code property (where actual lines of code sit). The function is an object with other properties and the code is another property. The code is invocable '()'.

```javascript

// Functions are objects

function greet() {
  console.log('Hi!'); // this is stored in the CODE property
}

greet.language = 'english'; // can add properties to the function object

console.log(greet);
console.log(greet.language);
greet(); // code is invoked ()

```

## Function Statements and Expressions
Expression: a unit of code that results in a value. It doesn't have to save to a variable.

```javascript

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

```

# By Value -vs- By Reference
```javascript
// Primitive
a = 3;
b = a;
// b will be stored in memory by value. b will be a seperate copied value of 3

// Object
a = { greeting: 'hi' }
b = a
// b and a share memory location, so this is by reference
// all objects interact by reference

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

```

## Mutate
To change something. Immutable means it CAN NOT be changed.

# Objects, Functions, this
the varible 'this' points at a different object depending on how the function is invoked.
'this' can be changed depending on how the function is called.

```javascript
// this keyword
console.log(this); // this points a the global object at this point in the code (Window)

function a() {
  console.log(this); // this is the window object (the global object)
  this.newVariable = 'hello';
}

a();

var b = function() {
  console.log(this); // this is the window object (the global object)
}

b();

console.log(newVariable); // this is still pointing to the global object, the global namespace


var c = {
  name: 'The c object',
  log: function() {
    this.name = 'updated c'; // can mutate this.name, because this is the object
    console.log(this);
  }
}

c.log(); //=> this is the object c

var d = {
  name: 'The c object',
  log: function() {
    this.name = 'updated d'; // can mutate this.name, because this is the object
    console.log(this);

    var setname = function(newname) {
      this.name = newname; // this actually attaches to the global object, even though it is inside an object
    }
    setname('updated d again!');

    console.log(this);
  }
}

d.log(); //=> this is the object d

// Use self pattern
// set this to self so that you know you are using the correct this object throught the object, and not using the global window object unexpectedly
var e = {
  name: 'The e object',
  log: function() {
    var self = this; // do this to control this, so it points to the object, not the global namespace window object

    self.name = 'updated e';
    console.log(self);

    var setname = function(newname) {
      self.name = newname;
    }
    setname('updated e again!');

    console.log(self);
  }
}

e.log(); //=> this is the correct/expected object e

```

# Arrays (Collections)

```javascript

var arr = [1,2,3,4];
console.log(arr[0]);

// Javascript can hold any array of any type mixed and matched
arr = [
  1,
  false,
  3,
  {
    name: 'Tim',
    address: '123 Coll street'
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  "Howdy"
];

console.log(arr);

arr[4](arr[3].name)

```

# Arguments and Spreads
parameters you pass to a function, javascript gives a keyword of that same name that contains them all.

```javascript

// arguments keyword - will eventually be deprecated

function greet(firstname, lastname, language) {
  // to default the value if language = 'en' in the arguments doesn't work.
  // function greet(firstname, lastname, language = 'en') {
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('missing parameters!');
    return;
  }
  console.log('arg 0: ' + arguments[0]);
  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('---------');
}

greet(); /// hoisting sets the arguments to undefined
greet("John");
greet("John", "Doe");
greet("John", "Doe", 'es');

// spreads - instead of arguments keyword
// not supported in all browsers as of right now

function spreads(name, ...more) {
  console.log(name);
  console.log(more);
  console.log('more 0: ' + more[0]);
  console.log('more 1: ' + more[1]);
}

spreads('paul', 'nicki', 'synjon'); // paul assigned to name, nicki/synjon assigned to more

```

## Function overloading
This doesn't really work in javascript like it does in other languages
because of the way javascript handles functions

```javascript

function greet(firstname, lastname, language) {
  language = language || 'en';

  if (language === 'en') {
    console.log('Hello ' + firstname + ' ' + lastname);
  }

  if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
  }

}

//this is one simple way to overlaod
//
function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

```

# Syntax Parsers
The code we write is parsed/translated by the javascript engine.
It parses character by character, making assumptions and making changes to code before it is executed.
We have to think how the parser in validating the code.

# Automatic Semicolon Insertion
Semicolons are optional. The javascript engine parses and finishes a line it inserts a semicolon automatic when it sees a carriage return.
ALWAYS PUT YOUR OWN SEMICOLONS. Do not let the engine do this for you.

```javascript

function getPerson() {
  return //=> parser will enter a semi colon here (in some browsers), function will just return undefined, in later versions of chrome this works as you expect
  {
    firstname: 'Tony'
  }
}

console.log(getPerson()); //=> returns undefined

function getPerson() {
  return { //=> do it like this
    firstname: 'Tony'
  }
}

console.log(getPerson()); //=> returns the object

```

## Whitespace
Syntax parser is liberal with the amount of space you can use. Whitespace is ignored. Frameworks and libraries tend to use lots of whitespace and comments. Sometimes that can make it hard to read, but you have to learn to ignore the white space and pay attention to the code.
It is important to comment your code and give whitespace to your code is easier to read an understand.

# Immediately Invoked Function Expressions (IIFE)S
Invoking a function expression on the fly

```javascript

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

```

## IIFE and Safe Code
When the code is first loaded the Global Execution context is created.
It is empty until it hits the IIFE line.
Then a new execution context is created for the anonymous function.
The executed function variables do not touch the global environment.

```javascript

// One file
var firstname = 'Peter';

(function(name) {
  var greeting = 'Hello '; //=> does not touch global context greeting variable
  console.log(greeting + name);
}(firstname)); // the code wrapped in parenthesis and function expression is protected

console.log(greeting); // outputs 'Hola!', which was added to the global context

// Second file
var greeting = 'Hola!';
```

If you want excess to the global context you pass the global object to the expression.
This effects the global object intentionally.

```javascript

var firstname = 'Peter';

(function(global, name) {
  var greeting = 'Hello '; //=> does not touch global context greeting variable
  global.greeting = 'Howdy!'; // add a variable to the global window
  console.log(greeting + name);
}(window, firstname)); // pass in window object (global context)

```

# Understanding Closures
Variables still accessible in memory, after execution context are destroyed.

```javascript

function greet(whattosay) {

  // whattosay variable is still stored in memory after greet execution context is done.
  return function(name) {
    // even though the execution content is gone, the whattosay variable is still
    // sitting in memory, the javascript engine makes sure the variable can still be found
    // This is closure. The javascript engine just makes sure it still works.
    // Scope is left intact.
    console.log(whattosay + ' ' + name);
  }

}

var sayHi = greet('Hi');
sayHi('Peter'); //=> 'Hi Peter'

```
