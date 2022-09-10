  // Define UI Vars

  const form = document.querySelector('#task-form');
  const taskList = document.querySelector('.collection'); 
  const clearbtn = document.querySelector('.clear-tasks');
  const filter = document.querySelector('#filter');
  const taskInput = document.querySelector('#task');

  // // load all event listeners
  // loadEventListeners();

  // //   Load all event Listeners
  // function loadEventListeners(){
  //   // Add task event
  //   form.addEventListener('submit', addTask);
  // }

  // // Add task
  // function addTask(e) {
  //   if(taskInput.value === '') {
  //     alert('Add a task');
  //   }

  //   e.preventDefault();
  // }

// Load all event listeners
 loadEventListeners();

// Load all event listeners
 function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearbtn.addEventListener('click', cleartasks);
 // Filter tasj event
 filter.addEventListener('keyup',filterTasks);
   
 }

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create li element 
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create a text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add Class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li); 

  // Clear Input
  taskInput.value = '';

  e.preventDefault();
}

// Remove Task

function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    // console.log(e.target);
    if(confirm('Are you sure')){
      e.target.parentElement.parentElement.remove();
    }
   

  }
}

// Clear tasks
function cleartasks() {
  //  taskList.innerHTML = '';

  // faster 
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;  
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else {
      task.style.display = 'none';
    }
      // console.log(text);

  });
  // console.log(text);
}