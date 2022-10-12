let a = ['java', 'php', 'python', 'ruby', 'rust','C++'];

// a.copyWithin(3,2) // ['java', 'php', 'python', 'python', 'ruby', 'rust']
a.copyWithin(-3,-2,-1) // ['java', 'php', 'python', 'python', 'ruby', 'rust']
console.log(a); 