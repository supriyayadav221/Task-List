
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
//Add event
  form.addEventListener('submit', addTask);
//Remove item
taskList.addEventListener('click',removeTask);
//Clear whole taskList
clearBtn.addEventListener('click',clearTask);
}


function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }


  const li = document.createElement('li');

  li.className = 'collection-item';
  
  li.appendChild(document.createTextNode(taskInput.value));
 
  const link = document.createElement('a');

  link.className = 'delete-item secondary-content';

  link.innerHTML = '<i class="fa fa-remove"></i>';
 
  li.appendChild(link);

 
  taskList.appendChild(li);

 
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e)
{
  if(e.target.parentElement.classList.contains('delete-item'))
  {
    if(confirm('Are you sure?')){
    e.target.parentElement.parentElement.remove();
  }}
}

function clearTask()
{
  if (confirm('Are you sure to clear all'))
  {
  while(taskList.firstChild)
  {
    taskList.removeChild(taskList.firstChild);
  }}
}