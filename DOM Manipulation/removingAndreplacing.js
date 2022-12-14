// Replace Element

// Create Element
const newHeading = document.createElement('h2');

// Add id
newHeading.id ='task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List1'));

// Get the old heading
const oldheading = document.getElementById('task-title'); 

// Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldheading);



// REMOVE ELEMENT

const lis = document.querySelectorAll('li')
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];
let val;

// Classes
val = link.className;          // delete-item secondary-content
val = link.classList;          // DOM Token List
val = link.classList[0];       // delete-item
link.classList.add('test');    // delete-item secondary-content test
link.classList.remove('test'); // delete-item secondary-content 
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google')
val = link.hasAttribute('title');
link.removeAttribute('title')
val = link

console.log(newHeading);
console.log(val);

