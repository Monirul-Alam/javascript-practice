// template literals

var a =5;
var b =6;

console.log(`I am ${a} and I am ${b}`);

function modifier(strings, ...values) {
  const m = strings.reduce((prev, current) => {
    return prev +current +(values.length ? "Mr. " + values.shift() : "");
  }, "");
  return m;
}

var player1 = "Sakib";
var player2 = "tamim";
console.log(modifier`We have ${player1} and ${player2} in our field`);