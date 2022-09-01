// Using The Console
// console.log(123);
// var greeting = 'hello';
// console.log(greeting);
// console.log([1,2,4,5]);
// console.log({a:3,b:2});
// console.table({a:3,b:2});

// console.error('This is error');
// console.clear();
// console.warn('This is warning');

// --------------------------------------------------------------------

// Variable- var, let ,const


// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Multi word vars
// var firstName = 'John'; // Camel case
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// LET
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);


// CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// person.name = 'Sara';
// person.age = 32;

// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6);

// console.log(numbers);



// Data types


// PRIMITIVE

// String
//const name = 'John Doe';
// Number
//const age = 45;
// Boolean
//const hasKids = true;
// Null
//const car = null;
// Undefined
//let test;
// Symbol
//const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
//const hobbies = ['movies', 'music'];
// Object literal
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);

//----------------------
// Type Conversion
//let val;

// Number to string
// val = String(555);
// val = String(4+4);
// Bool to string
//val = String(true);
// Date to string
//val = String(new Date());
// Array to string
//val = String([1,2,3,4]);

// toString()
//val = (5).toString();
//val = (true).toString();

// String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100.30');
// val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

//----------------------------------------------------------
// String Methods and Concatenation

const  firstName = 'monir';
const lastName = 'Alam'
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';
let val;

// concatenation
val = firstName + ' ' + lastName;
console.log(val);

// Append
 
val = 'tanvir ';
val += 'khan';
val  =firstName.indexOf('n'); //2
// Escaping
val =  'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

val = firstName[2];

// indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

// charAt()
val = firstName.charAt('2');
// Get last char
val = firstName.charAt(firstName.length - 1);

// substring()
val = firstName.substring(0, 4);

// slice()
val = firstName.slice(0,4);
val = firstName.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// includes()
val = str.includes('foo');

console.log(val);


//Template Literal
 const name1 = 'john';
 const age = 30;
 const job = 'Web Developer';
 const city = 'Miami';

 // Without template strings(es5)
 html = '<ul><li>Name: '+name +' </li> <li>Age: '+age+'</li> </ul>'; 

 // with template literals(Strings from es6)
 html =     `
                <ul>
                 <li>Name: ${name1} </li>
                 <li>Job: ${job} </li>
                 <li>${2+2} </li>
                 <li>${age> 30 ? 'Over 30' : 'Under 30'} </li>
                 
            
                </ul>
            `
 document.body.innerHTML = html;