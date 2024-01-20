let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = {
            text: taskText,
            date: new Date(),
            completed: false
        };

        tasks.push(task);
        updateLists();
        taskInput.value = '';
    }
}

function updateLists() {
    const pendingTasksList = document.getElementById('pendingTasks');
    const completedTasksList = document.getElementById('completedTasks');

    // Clear existing lists
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${task.text} - ${task.date.toLocaleString()}`;

        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.onclick = () => completeTask(index);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteTask(index);

            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);

            pendingTasksList.appendChild(listItem);
        }
    });
}

function completeTask(index) {
    tasks[index].completed = true;
    updateLists();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateLists();
}

// Initial update
updateLists();
