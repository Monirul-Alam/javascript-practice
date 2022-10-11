// for loop, for in , for of

for(var i =0;i<=5;i++) {
  console.log(i)
}

// for in
const myObj = {
  name: "Javascript",
  estd: "1995",
  founder: "Brendan Eich"
}
for(property in myObj) {
  console.log(property)
}
//  for of
const myArray = [1,2,3,4,5];
for(element of myArray) {
  console.log(element);
  // in dile index ashbe
  // of dile value ashbe
}
const myString = " I am Monir";
for(element in myString) {
  console.log(element);
}