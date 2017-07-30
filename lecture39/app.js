// arguments keyword - will eventually be deprecated
//

function greet(firstname, lastname, language) {
  language = language || 'en'; // to default the value if language = 'en' in the arguments doesn't work.
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
