const taskAddButton = document.querySelector(`.task-add input[type='submit']`);
const taskFilterForm = document.querySelector(
  `.task-filter input[type='submit']`
);
const newTaskInput = document.querySelector(`.task-add input[type='text']`);
const taskUl = document.querySelector("#task-list");
const container = document.querySelector(".container");

// event
taskAddButton.addEventListener("click", onClick);
taskFilterForm.addEventListener("click", onClick);

container.addEventListener("click", deleteTask);

// function

function deleteTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("yes delete.");
    e.target.parentElement.parentElement.remove();
  }
}

function onClick(e) {
  // add new task
  if (e.target === taskAddButton) {
    console.log(newTaskInput.value);
    console.log("add new task clicked");

    if (newTaskInput.value === "") alert(`Don't forget to add new task!!!`);
    else {
      addNewTask(newTaskInput.value);
    }
    newTaskInput.value = "";
  }

  // clear tasks
  if (e.target === taskFilterForm) {
    console.log("clear all tasks");
    clearAllTasks();
  }
  e.preventDefault();
}
//
function addNewTask(task) {
  var a = document.createElement("a");
  a.classList.add("btn");
  a.classList.add("delete-item");
  a.setAttribute("href", "#");
  a.innerHTML = `<i class="far fa-calendar-times"></i
    >`;
  //
  var li = document.createElement("li");
  li.classList.add("task-item");
  li.textContent = task;
  li.appendChild(a);
  //
  taskUl.appendChild(li);
}

//
function clearAllTasks() {
  while (taskUl.firstElementChild) taskUl.removeChild(taskUl.firstElementChild);
}
