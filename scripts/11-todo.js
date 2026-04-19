const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''; //accumulator variable

  for(let i = 0; i < todoList.length; i++) { // loop array
    const todo = todoList[i]; //assign singular index 
    const html = `<p>${todo}</p>`; //create html each index
    todoListHTML += html;
  }
  console.log(todoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const todoInput = document.querySelector('.js-input');

  todoList.push(todoInput.value);
  console.log(todoList);

  todoInput.value = '';

  renderTodoList();
}