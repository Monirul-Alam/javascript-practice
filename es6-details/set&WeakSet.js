let myset = new Set();
// Set unique hobe. Unique value ei offer kore..


myset.add(5);
myset.add(3).add('Bangladesh');
myset.delete(3);

// myset.clear();
// console.log(myset);
// console.log(myset.size);

// Convert array to set
let myArray = [1,2,4];

let mySet = new Set(myArray);

for(let value of mySet) {
   //console.log(value);
   //1
   //2
   //4
}
 //console.log(mySet) 
 //Set(3) { 1, 2, 4 }

// Convert set to array
// console.log([...mySet]); // [ 1, 2, 4 ]

// Interesting Thing

let myArray1 = [1,2,3,4,555,555,555,6,6,3];

 //console.log([...new Set(myArray1)]); // [ 1, 2, 3, 4, 555, 6 ]

 // Union

 let a = new Set([1,3,4]);
 let b = new Set([2,4,5]);

 let union = new Set([...a ,...b]);
 
//console.log(union); //Set(5) { 1, 3, 4, 2, 5 }

let intersection = new Set([...a].filter(x=> b.has(x)));
//console.log(intersection); // Set(1) { 4 }



let diffrence = new  Set([...a].filter(x => !b.has(x)));
console.log(diffrence); //Set(2) { 1, 3 }
 








