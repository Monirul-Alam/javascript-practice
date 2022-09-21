const personProtypes = {
  greeting : function() {
    return ` Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function(newLastName) {
    this.lastName = newLastName;
  }
}


const marry = Object.create(personProtypes);
marry.firstName = 'Marry';
marry.lastName = 'linn';
marry.age = 30;
marry.getsMarried('williams'); //Hello there Marry williams

console.log(marry.greeting());

