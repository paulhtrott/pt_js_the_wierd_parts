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
