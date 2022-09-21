class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }


  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }


 
}
// Customer Class
class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);


    this.phone =phone;
    this.membership = membership
    }

    static getMembershipCost() {
      return 500;
    }
}

const hasan = new Customer('Hasan' , 'Jr', '3233-333333','Standard');

console.log(hasan.greeting());
console.log(Customer.getMembershipCost()); // Because it is static wew should use actual class name-> Customer