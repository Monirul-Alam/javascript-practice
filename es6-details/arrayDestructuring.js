// var numbers = [1,2,44,5,6,7];
// var numbers1 = [1,2,[44,5,9],7];

// var [a,b] = numbers;
// var [,a,,b,c] = numbers;
// var [,,[,x,y]] = numbers1

// console.log(a,b);
// console.log(a,b,c);
// console.log(x,y);
// Interesting this destructuring 
var x = 1;
var y = 2;
[y, x] = [x, y]
console.log(x,y) // -> 2
console.log(y) // -> 1