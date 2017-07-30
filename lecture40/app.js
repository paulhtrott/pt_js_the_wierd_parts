// Function Overloading
// this doesn't really work in javascript like it does in other languages
// because of the way javascript handles functions
function greet(firstname, lastname, language) {
  language = language || 'en';

  if (language === 'en') {
    console.log('Hello ' + firstname + ' ' + lastname);
  }

  if (language === 'es') {
    console.log('Hola ' + firstname + ' ' + lastname);
  }

}

//this is one simple way to overlaod
//
function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
