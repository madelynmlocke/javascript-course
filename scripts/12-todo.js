const todoList = JSON.parse(localStorage.getItem('toDoList')) || [{ 
  name: 'make dinner', 
  dueDate: '2026-06-07'
}, 
{ 
  name:'wash dishes', 
  dueDate: '2026-05-15'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = ''; //accumulator variable


  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();

          saveToStorage();
        " class="delete-button">Delete</button>
    `; //create html each index
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const todoInput = document.querySelector('.js-input');
  const name = todoInput.value;
 
  const date = document.querySelector('.js-date');
  const dueDate = date.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });

  todoInput.value = '';
  renderTodoList();

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('toDoList', JSON.stringify(todoList));
}