var numbers = [1,2,3,4,5]; 


// Slice Method
 var result = numbers.slice(-1,3);
// console.log(result);

// Splice Method

var result = numbers.splice(1,2,10,12,13,14);
console.log(numbers); // mian array ke change kore [1, 10, 12, 13, 14, 4, 5]
console.log(result);