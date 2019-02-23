/*
a) Implement for node app.js file, where you call greet 1...4 files
b) To greet1.js file implement saving of the function to module.exports,
 which makes it possible to call it from app.js
c) Implement module.exports.greet member, which includes function and call that from app.js
d) Implement Greet-class, export it and call it from app.js
*/
const greet1 = require('./greet1');
const greet2 = require('./greet2');
const Greet3 = require('./greet3');

// b)
console.log(greet1());

// c)
console.log(greet2.greetSpanish());
console.log(greet2.greetSwedish());

// d)
const greeting3 = new Greet3();
greeting3.greet();