function logGreeting (fn) {
  fn();
}

logGreeting(function() {
  console.log('morjens!');
});

