// Object literal syntax

var Tony = {
  firstname: 'Tony',
  lastname: 'Trott',
  address: {
    street: '123 Fancy Street',
    city: 'Newark',
    state: 'New Jersey'
  }
}; // object literal - short hand to call new Object();


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
