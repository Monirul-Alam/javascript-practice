class Person {
 constructor(firstname, lastName, dob) {
  this.firstname = firstname;
  this.lastName = lastName;
  this.birthday = new Date(dob);
 }


greeting() {
  return `Hello there ${this.firstname} ${this.lastName}`;
}


calculaeAge() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear()-1970);
}

getsMarrtied(newLastName) {
  this.lastName =newLastName; 
}

static addNumber(x,y) {
  return x+y
}
}
const mary = new Person('Mary' , 'Lana', '11-12-1989');

mary.getsMarrtied('Linn');
console.log(mary.greeting());

console.log(Person.addNumber(1,2));