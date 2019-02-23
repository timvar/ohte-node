// Use the greet-module from app.js through require-syntax
Greet = require('./greet');

const myFunc = (fn) => {
  fn();
}

myFunc(Greet);