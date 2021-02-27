const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click', addTodo)

function addTodo(event){
  event.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add("todo");

  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value =""
}

//look at the left top of your vscode, you'll see terminal click it to open a new terminal? respond if you get
//just created new terminal
//inside the terminal do git status
//just did it. its the same as the picture i sent
// probably didn't structure your folder well 
//on the terminal type ls and send a screenshot
//just 'ls' withput the quotes
//dope, do git add . now
//the only solution I can think of now is to change the folder directory. a git process already crash in the folder or so
//okay try this now git init do git add . now
// did you put . aafter th add?
