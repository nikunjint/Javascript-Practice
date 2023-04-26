//prompt is used to take the input fields and 2 arguments//

// let age = prompt('Enter your age', "");
// console.log(`your age is ${age} years old`);

let num1 = prompt('Enter first number',"");
let num2 = prompt('Enter second number',"");
num1= parseInt(num1);
num2= parseInt(num2);
sum= num1 + num2
isConfirm = confirm("Are you sure you want to add these numbers");
console.log(isConfirm); // gives buttons like ok and cancel //
console.log(sum);

let number1 = +prompt('Enter first number',""); // + can be used in a shortcut way 
let number2 = +prompt('Enter second number',"");
console.log(number1 + number2);