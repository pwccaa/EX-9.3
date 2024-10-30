document.getElementById("submitBtn").addEventListener('click', function() {
    console.log("botao");
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value;

    if (taskText !== '') {
        const taskContainer = document.getElementById("task-container");
        const newTask = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const editBtn = document.createElement('button');

        newTask.className = 'task';
        newTask.textContent = taskText;

        deleteBtn.className = 'delete-button';
        editBtn.className = 'edit-button';

        deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';

        taskContainer.appendChild(newTask);
        taskInput.value = '';

        newTask.appendChild(deleteBtn);        
        newTask.appendChild(editBtn);
    }
});