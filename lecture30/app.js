// Objects and the Dot

var person = new Object(); // better ways to do this, this is example for now
person["firstname"] = "Tony";
person["lastname"] = "Trott";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object(); // not the preferred way to instantiate an object

person.address.street = "1004 Road Street";
person.address.city = "New York";
person.address.state = "New York";
person.address.zipcode = "90210";

console.log(person.address);
console.log(person['address']['state']);
