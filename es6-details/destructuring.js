// Object destructuring
const user = {
  id: 339,
  name: "sakib",
  age:35,
  // education: {
  //   degree: "Masters",
  // }
}


const {name:title} = user; // title ei name assign krse.

// const {education:{degree : x}} = user;
const {education:{degree : x} = {}} = user;// = {} means if the education object is missing then it will print undefined

console.log(title);
console.log(x);
