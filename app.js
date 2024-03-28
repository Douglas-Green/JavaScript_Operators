console.log('Hello World!\n==========\n');
console.log(
  'Follow the steps in the README.md file to complete the exercises:\n==========\n'
);

// Exercise 1
console.log('EXERCISE 1:\n==========\n');

let a = 20;
let b = 4;
let add = a + b;
let minus = a - b;
let multiply = a * b;
let dividing = a / b;
console.log(add);
console.log(minus);
console.log(multiply);
console.log(dividing);

// Exercise 2
console.log('EXERCISE 2:\n==========\n');

let num = 11;
let str = '11';
let str2 = 'eleven';
let isPresent = true;
let firstName = 'Frodo';
let lastName = 'Baggins';

let typeCoercion2 = num + str2; // Result: "11eleven"
let typeCoercion3 =
  num +
  isPresent; /* Result: 12... This is because javascript converts the boolean value into a number before the addition. true is treated as adding a 1 an false is treated as a 0. Making the equation 11 + 1 resulting in 12 */
let typeCoercion4 = firstName + num; // Result: "Frodo11" Because javascript is converting the num to a string and then concatenating it to the firstName string.
let typeCoercion5 = isPresent + str; // Result: "true11" Because javascript is converting the boolean value to a string and then concatenating it to the str string.
let typeCoercion6 = firstName + lastName; // Result: "FrodoBaggins" Because javascript is concatenating the two strings together.

console.log(typeCoercion2);
console.log(typeCoercion3);
console.log(typeCoercion4);
console.log(typeCoercion5);
console.log(typeCoercion6);

console.log('EXERCISE 3:\n==========\n');

let val = 5;
let str3 = '5';
let str4 = 'five';
let isPresent2 = false;

let equality1 = val == str3; // Result: true
let strictEquality1 = val === str3; // Result: false
let notValue = !isPresent2;
let equality2 = 'eleven' == str4 && val >= str3; // Result: false
let value = !isPresent2 || isPresent2;
let value1 = 0 == false;
let value2 = 0 === false;
let value3 = 0 != false;
let value4 = 0 !== false;

console.log(equality1);
console.log(equality2);
console.log(notValue);
console.log(strictEquality1);
console.log(value);
console.log(value1);
console.log(value2);
console.log(value3);
console.log(value4);
