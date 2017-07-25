# Global Execution Context Phases
##PHASE 1
###Execution Context is Created (CREATION PHASE)
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

/*the var a above is undefined because var a is set to undefined due to hoisting. b function outputs because functions are fully loaded into memory.*/
```

##PHASE 2
###Execution Context is Executed (EXECUTION PHASE)
Executes code line by line

#Javascript Concepts
Javascript is...

Single Threaded:
One Command at a time
Javascript is single threaded

Synchronous:
One at a time, one line at a time and in order



