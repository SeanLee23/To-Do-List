function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      const newTask = document.createElement('li');
      newTask.innerText = taskInput.value;
      newTask.onclick = toggleTask;
      taskList.appendChild(newTask);
      taskInput.value = '';
    } else {
      alert('Please enter a task!');
    }
  }
  
  function toggleTask() {
    this.classList.toggle('completed');
  }
  