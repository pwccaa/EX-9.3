//clear
const taskInput = document.getElementById('task-input');
taskInput.value = '';

//functions
function addTask(ev) {
    ev.preventDefault();

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value;

    if (taskText !== '') {
        const taskContainer = document.getElementById('task-container');
        const newTask = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        const id = Date.now();

        newTask.className = 'task';
        newTask.id = id;
        
        newTask.innerHTML = `<p class='task-para'>${taskText}`;

        deleteBtn.className = 'delete-button';
        editBtn.className = 'edit-button';

        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';

        taskContainer.appendChild(newTask);
        taskInput.value = '';

        deleteBtn.addEventListener('click', function(ev){
            deleteTask(id);
        });

        editBtn.addEventListener('click', function(ev){
            editTask(id);
        });

        newTask.appendChild(deleteBtn);  
        newTask.appendChild(editBtn);
    }
}3

function deleteTask(id){
    const task = document.getElementById(id);
    task.remove()
}

function editTask(id){
    const task = document.getElementById(id);
    const taskInput = document.getElementById('task-input');
    const form = document.getElementById('todo-form');
    const addListener = form.onsubmit

    taskInput.value = task.children[0].innerHTML;
    submitBtn.innerHTML = 'Edit';

    form.onsubmit = function(ev){
        ev.preventDefault();
       
        task.children[0].innerHTML = taskInput.value;

        form.onsubmit = addListener;
        taskInput.value = '';
        submitBtn.innerHTML = 'Submit';
    }
};

//events
document.getElementById("todo-form").onsubmit = addTask;