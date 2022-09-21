// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

}

// Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
}


const Person1 = new Person('Monirul', 'Alam');

console.log(Person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// inherit the Person prototype methods
 Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer('tim', 'cole', '38-77834', 'premium');

Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} Welcome to our Company`
}

console.log(customer1.greeting()); // Hello there tim cole
