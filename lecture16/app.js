// Scope Chain

//function b is lexically defined at the same level
//as the global level
function b() {
  //logged from global execution context (1)
  console.log(myVar);
}

function a() {
  // outer lexical environment of c is a
  function c(){
    // logged 2
    console.log(myVar);
  }

  var myVar = 2;

  b();
  c();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);
