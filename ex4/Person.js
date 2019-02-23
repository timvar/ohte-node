// a) Implement function constructor Person, which gets parameters firstname and lastname
// b) Add to the same class greet-functionality, whuch prints to console firstname and lastname
// c) Create John and Jane named objects and call greet for both of them

function Person (firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.greet = function() {return this.firstname + " " + this.lastname;};
}

const John = new Person('John', 'W');
const Jane = new Person('Jane', 'H');


console.log(John.greet());
console.log(Jane.greet());

