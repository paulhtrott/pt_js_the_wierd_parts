// Scope

// can use let instead of var
// let allows for block scoping
//
function b() {
  console.log(myVar);
}

function a() {
  function c(){
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
