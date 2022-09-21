// Person consturctor
  function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
      const diff = Date.now() - this.birthday.getTime();
      
       const ageDate = new Date(diff);

      return Math.abs(ageDate.getUTCFullYear() -1970);
    }
  }


  // const brad = new Person('brad',30);
  // const karla = new Person('Karla',40);

  // console.log(karla.age);

  const brad = new Person('brad', '9-10-1999')
  console.log(brad.calculateAge());
