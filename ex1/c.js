function greet () {
  console.log('Hello World');
}

function logGreeting (fn) {
  fn();
}

logGreeting(greet);