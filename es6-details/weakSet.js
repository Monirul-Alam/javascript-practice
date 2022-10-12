//  Weak Set are not ITERABLES


// const ws = new WeakSet();
// ws.add({a:1});

// console.log(ws);


const ws = new WeakSet();

class SomeClass {
  constructor() {
    ws.add(this);

  }
  method() {
    return 'I am Method';

  }
}

console.log(SomeClass.prototype.method());