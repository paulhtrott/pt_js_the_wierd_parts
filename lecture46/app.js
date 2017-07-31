// Understanding Closures
function greet(whattosay) {

  return function(name) {
    console.log(whattosay + ' ' + name);
  }

}

greet('Hi')('Paul');

var sayHi = greet('Hi');
sayHi('Peter');
