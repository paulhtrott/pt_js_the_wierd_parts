function b() {
  console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World';

console.log(a);


// PHASE 1
// Execution Context is Created (CREATION PHASE)
// Global Object - this - Outer Environment
// Setup Memory Space for Variables and Functions
// "Hoisting"
//
// functions in entirety is stored in memory
// variable assignments are given place holders and set to undefined until run time
//
// always best to put variables and functions at top.
//
// the var a above is undefined because var a is set to undefined due to hoisting. b function outputs because functions are fully loaded into memory.
//
// PHASE 2
// Execution Context is Executed (EXECUTION PHASE)
// Executes code line by line
//
//
// Javascript is:
// 1)
// Single Threaded:
// One Command at a time
// Javascript is single threaded
//
// 2)
// Synchronous:
// One at a time, one line at a time and in order
//
//
