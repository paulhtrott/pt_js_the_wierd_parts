// Functions are objects
//

function greet() {
  console.log('Hi!'); // this is stores in the CODE property
}

greet.language = 'english'; // can add properties to the function object

console.log(greet);
console.log(greet.language);
greet(); // code is invoked ()
