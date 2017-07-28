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
