// // document.getElementById()

 console.log(document.getElementById('task-title'));

// // Get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);


 const taskTitle = document.getElementById('task-title');


// // Change Styling

taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display =  'none';

// // chane content
taskTitle.textContent ='task List';
taskTitle.innerText  ='My Task';
taskTitle.innerHTML  =
'<span style = "color:red"> Task List </span>';

// //document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));



document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';

