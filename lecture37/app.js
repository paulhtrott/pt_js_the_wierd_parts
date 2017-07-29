// this keyword
console.log(this); // this points a the global object at this point in the code (Window)

function a() {
  console.log(this); // this is the window object (the global object)
  this.newVariable = 'hello';
}

a();

var b = function() {
  console.log(this); // this is the window object (the global object)
}

b();

console.log(newVariable); // this is still pointing to the global object, the global namespace


var c = {
  name: 'The c object',
  log: function() {
    this.name = 'updated c'; // can mutate this.name, because this is the object
    console.log(this);
  }
}

c.log(); //=> this is the object c

var d = {
  name: 'The c object',
  log: function() {
    this.name = 'updated d'; // can mutate this.name, because this is the object
    console.log(this);

    var setname = function(newname) {
      this.name = newname; // this actually attaches to the global object, even though it is inside an object
    }
    setname('updated d again!');

    console.log(this);
  }
}

d.log(); //=> this is the object d

// set this to self so that you know you are using the correct this object throught the object, and not using the global window object unexpectedly
var e = {
  name: 'The e object',
  log: function() {
    var self = this; // do this to control this, so it points to the object, not the global namespace window object

    self.name = 'updated e';
    console.log(self);

    var setname = function(newname) {
      self.name = newname;
    }
    setname('updated e again!');

    console.log(self);
  }
}

e.log(); //=> this is the correct/expected object e
