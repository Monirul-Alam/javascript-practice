// ES6 fat arrow function

// function number() {
//   console.log('fjdojfodf')
// }

// let number = (a,b) =>  a+b;


// console.log(number(10, 5));

var javascript = {
  name: "JavaScript",
  libraries: ["React", "Angular", "Vue"],
  printLibraries: function() {
    
    this.libraries.forEach( (a) => 
    console.log(`${this.name} loves ${a}`));
     
    

  }
}
javascript.printLibraries();