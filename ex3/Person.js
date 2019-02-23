//  Implement class person, where you have attributes 
// firstname and lastname and also function greet, where 
// you print out values of attributes using this-keyword

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    return console.log('Moi ' + this.firstname + ' ' + this.lastname + '!');
  }
}

const Lauri_24 = new Person('Lauri', 'Markkanen');
Lauri_24.greet();
