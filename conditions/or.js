let a = prompt("enter a number",'');
let b = prompt("enter a number",'');
num1= parseInt(a);
num2= parseInt(b);
sum = num1 + num2;
// if(sum< 10|| sum < 30)
// {
//  console.log('Your age is young');
// }
// else{
//     console.log('ur old ');
// }

let age =(sum<10 || sum <30)? 'young': 'old';
console.log(age);