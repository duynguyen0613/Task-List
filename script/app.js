const taskInput = document.querySelector("#task-add");
const taskSubmit = document.querySelector("#task-submit");
const taskUl = document.querySelector("#task-collection");
const taskClearButton = document.querySelector("#task-clear");
const container = document.querySelector(".container");
const taskFilterInput = document.querySelector("#task-filter");

//

taskSubmit.addEventListener("click", addNewTask);
taskClearButton.addEventListener("click", clearTask);
taskUl.addEventListener("click", deleteTask);
taskFilterInput.addEventListener("input", filterTask);

//

function filterTask(e) {
  const filtered = e.target.value;
  const tasks = taskUl.children;

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].innerText.indexOf(filtered) != -1) {
      tasks[i].style.display = "flex";
    } else {
      tasks[i].style.display = "none";
    }
  }
}

function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
function clearTask(e) {
  e.preventDefault();
  if (taskUl.children) {
    while (taskUl.firstElementChild)
      taskUl.removeChild(taskUl.firstElementChild);
  }
}

function addNewTask(e) {
  console.log(taskInput.value);
  e.preventDefault();

  if (taskInput.value === "") alert("Please enter a task...");
  else {
    loadTask(taskInput.value);
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
