// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      // Create a new list item
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create buttons for edit and delete
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editTask(li));
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => removeTask(li));
  
      // Append buttons to the list item
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      // Append the new task to the task list
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
  
      // Update local storage
      updateLocalStorage();
    }
  }
  
  // Function to remove a task
  function removeTask(taskElement) {
    taskElement.remove();
    updateLocalStorage();
  }
  
  // Function to edit a task
  function editTask(taskElement) {
    const updatedTaskText = prompt('Edit task:', taskElement.textContent);
    if (updatedTaskText !== null) {
      taskElement.textContent = updatedTaskText;
      updateLocalStorage();
    }
  }
  
  // Function to load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => editTask(li));
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => removeTask(li));
  
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      taskList.appendChild(li);
    });
  }
  