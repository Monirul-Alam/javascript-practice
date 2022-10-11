var numbers = [1,2,34,5,6,43];

var sum = numbers.reduce((preValue, currentValue, currentIndex, arr) => {
  return  preValue +currentValue;
}, 0);

console.log(sum);