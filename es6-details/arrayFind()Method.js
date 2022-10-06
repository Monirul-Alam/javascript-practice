class Student {
  constructor ( name , age ) {
    this.name = name ;
    this.age = age ;
  } 
 
  test () {
    console.log('hello');
 }
  exampleFunction() {
    let array = [1,2,3];
    array.find(function() {
      this.test();
    },this);
  }
}

let student = new Student ( " sumit " , 35 ) ;
student.exampleFunction();

// Array Find Index()
var numbers = [1,23,4,22, 14,53,21,3445];
var result = numbers.findIndex((currenrValue, index ,arr) => {
  return currenrValue>20;
}); 

//
var result1 = numbers.filter((currenrValue, index ,arr) => {
  console.log(index)
  console.log(arr)
  return currenrValue>20;
}); 

console.log(result);
console.log(result1);