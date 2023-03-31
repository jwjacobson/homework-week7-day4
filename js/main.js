let listTitle = document.createElement('h3');
listTitle.id = 'mylistTitle';
listTitle.innerHTML = 'Today\'s tasks';
listTitle.className = 'text-center mt-3 text-success';

let formRow = document.getElementsByClassName('row')[0];
formRow.after(listTitle);

let todoList = document.createElement('ol');
todoList.id = 'mytodoList';
// todoList.innerHTML = 'Placeholder';
todoList.className = 'text-center mt-3 text-warning-emphasis';

listTitle.after(todoList);

// Grab the form
let form = document.getElementById('todoForm');
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event){
    event.preventDefault(); 
    let todoTask = event.target.todoTask.value;
    listAppend(todoTask);
    event.target.todoTask.value = '';
}

function listAppend(task){
    let new_task = document.createElement('li');
    new_task.className = 'list-group-item';
    new_task.innerHTML = task; 
    todoList.append(new_task);
}