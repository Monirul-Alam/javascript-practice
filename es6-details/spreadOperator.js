var numbers =[1,2,3];

var a = [...numbers]; // exact copy of numbers
var newNumbers = [...numbers, 4,5,6];

numbers.push(4);


console.log(newNumbers);
console.log(a);

var myobj1 = {
  x:1,
  y:2
}

var myobj2 = {
  a:1,
  b:2
}

console.log({...myobj1, ...myobj2});