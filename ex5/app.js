// a) Create Immediately Invoked Function Expression,
// which gets as a parameter the lastname
// b) Take into account function scope as visibility, 
// test firstname variable outside of the IIFE and give 
// it another values inside the function

var result = (function () { 
  var lastname = "Jerry"; 
  return lastname; 
})(); 

// console.log(lastname); does not work, lastname not defined outside of the function
 
console.log(result); 