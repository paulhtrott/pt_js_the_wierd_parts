// Arrays

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
