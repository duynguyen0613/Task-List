const taskInput = document.querySelector("#task-add");
const taskSubmit = document.querySelector("#task-submit");
const taskUl = document.querySelector("#task-collection");
const taskClearButton = document.querySelector("#task-clear");
const container = document.querySelector(".container");
const taskFilterInput = document.querySelector("#task-filter");

var taskList = [];
//

taskSubmit.addEventListener("click", addNewTask);
taskClearButton.addEventListener("click", clearTask);
taskUl.addEventListener("click", deleteTask);
taskFilterInput.addEventListener("input", filterTask);

//

console.log(localStorage.getItem("tasks"));

//loading local storage into UL LI

if (localStorage.getItem("tasks") != null) {
  const tasksStorage = localStorage.getItem("tasks");
  taskList = tasksStorage.split(",");

  taskList.forEach(function (task) {
    loadTask(task);
  });
}
//

function filterTask(e) {
  const filtered = e.target.value.toLowerCase();
  const tasks = taskUl.children;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].innerText.toLowerCase().indexOf(filtered) != -1) {
      tasks[i].style.display = "flex";
    } else {
      tasks[i].style.display = "none";
    }
  }
}

function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    const inputValue = e.target.parentElement.parentElement.innerText;
    e.target.parentElement.parentElement.remove();
    const pos = taskList.indexOf(inputValue);
    taskList.splice(pos, 1);

    localStorage.setItem("tasks", taskList);
  }
}
function clearTask(e) {
  e.preventDefault();

  if (taskUl.children) {
    while (taskUl.firstElementChild)
      taskUl.removeChild(taskUl.firstElementChild);
  }

  taskList.splice(0, taskList.length);
  localStorage.removeItem("tasks");
}

function addNewTask(e) {
  e.preventDefault();

  if (taskInput.value === "") alert("Please enter a task...");
  else {
    loadTask(taskInput.value);

    // add tasks into tasks local storage
    taskList.push(taskInput.value);

    localStorage.setItem("tasks", taskList);
    //
    taskInput.value = "";
  }
}

function loadTask(value) {
  // remove current tasks

  var a = document.createElement("a");
  a.classList.add("delete-item");
  a.setAttribute("href", "#");
  a.innerHTML = `<i class="fas fa-trash">`;

  var li = document.createElement("li");
  li.classList.add("task-item");
  li.innerText = value;
  li.appendChild(a);

  taskUl.appendChild(li);
  // load tasks into ul dom
}
