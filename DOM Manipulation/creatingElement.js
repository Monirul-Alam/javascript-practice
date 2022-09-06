// Creat element

const li = document.createElement('li');

//  Add class
li.className = 'collection-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append

li.appendChild(document.createTextNode('Hello world')); 

// Creat new link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class= "fa fa-remove"></i>';

// Append link into li
li.appendChild(link);
// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);