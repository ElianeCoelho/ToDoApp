// Seletores para os elementos principais
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Carregar tarefas
function loadTasks() {
  taskList.innerHTML = ''; // Limpa a lista
  tasks.forEach(task => displayTask(task));
}

// Salvar tarefas
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Adicionar tarefa
function addTask() {
  const taskName = taskInput.value.trim();
  const taskDueDate = taskDate.value;

  if (!taskName || !taskDueDate) return alert("Tarefa e data são obrigatórias!");

  // Verificar duplicação para o mesmo dia
  if (tasks.some(task => task.name === taskName && task.date === taskDueDate)) {
    alert("Essa tarefa já foi adicionada para essa data.");
    return;
  }

  const newTask = { id: Date.now(), name: taskName, date: taskDueDate, completed: false };
  tasks.push(newTask);
  saveTasks();

  displayTask(newTask);
  taskInput.value = '';
  taskDate.value = '';
}

// Exibir tarefa na lista
function displayTask(task) {
  const li = document.createElement('li');
  li.className = 'flex justify-between items-center bg-gray-100 p-2 rounded';

  const taskInfo = document.createElement('span');
  taskInfo.textContent = `${task.name} - ${task.date}`;
  if (task.completed) taskInfo.classList.add('line-through', 'text-gray-400');
  li.appendChild(taskInfo);

  const completeBtn = document.createElement('button');
  completeBtn.className = 'text-green-500 px-2';
  completeBtn.textContent = '✓';
  completeBtn.title = 'Marcar como concluída';
  completeBtn.onclick = () => toggleCompleteTask(task.id);
  li.appendChild(completeBtn);

  const editBtn = document.createElement('button');
  editBtn.className = 'text-blue-500 px-2';
  editBtn.textContent = '✎';
  editBtn.title = 'Editar tarefa';
  editBtn.onclick = () => editTask(task.id);
  li.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'text-red-500 px-2';
  deleteBtn.textContent = '✗';
  deleteBtn.title = 'Excluir tarefa';
  deleteBtn.onclick = () => deleteTask(task.id);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
}

// Alternar tarefa concluída
function toggleCompleteTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    task.completed = !task.completed;
    saveTasks();
    loadTasks();
  }
}

// Editar tarefa
function editTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    const newName = prompt('Editar Tarefa:', task.name);
    if (newName) {
      task.name = newName.trim();
      saveTasks();
      loadTasks();
    }
  }
}

// Excluir tarefa
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  saveTasks();
  loadTasks();
}

// Eventos
addTaskBtn.onclick = addTask;
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") addTask();
});
window.onload = loadTasks;
