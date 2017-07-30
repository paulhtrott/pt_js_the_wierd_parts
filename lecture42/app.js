// Automatic semicolon insertion
function getPerson() {
  return //=> parser will enter a semi colon here (in some browsers), function will just return undefined, in later versions of chrome this works as you expect
  {
    firstname: 'Tony'
  }
}

console.log(getPerson()); //=> returns undefined

function getPerson() {
  return { //=> do it like this
    firstname: 'Tony'
  }
}

console.log(getPerson()); //=> returns the object
