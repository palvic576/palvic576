function addTask() {
    const taskInput = document.getElementBYLd('taskINput');
    const taskList = document.getElementBYLd('taskList');
    const task = taskInput.value;

    if (task) {
        const listItem = document.createElement('li')
        listItem.textContent = task;
        taskList.appendChild(listItem);
        taskINput.value = '';

        listItem.addListener('click', () => {
            listItem.style.textDecoration = 'line-through';
        });

        listItem.addEventListener('dblclick', () => {
            taskList.removeChild(listItem);
        });

        

    }

}