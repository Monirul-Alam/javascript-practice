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