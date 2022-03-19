// Selectors

// Input Name
const todoName = document.querySelector('.todo-input-name');
// Input Description
const todoDescription = document.querySelector('.todo-input-description');
// Input Description
const todoAssignedTo = document.querySelector('.todo-input-assigned');
// Input Description
const todoDate = document.querySelector('.todo-input-date');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click',addTodo)

// Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault();
    // Create Div to store list items
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // 
    const newName = document.createElement('p');
    newName.innerHTML = todoName.value;
    newName.classList.add('todo-item')
    todoDiv.appendChild(newName);

     // 
    const newDescription = document.createElement('p');
    newDescription.innerHTML = todoDescription.value;
    newDescription.classList.add('todo-item')
    todoDiv.appendChild(newDescription);

      // 
    const newAssignedTo = document.createElement('p');
    newAssignedTo.innerHTML = `Assigned to: ${todoAssignedTo.value}`;
    newAssignedTo.classList.add('todo-item')
    todoDiv.appendChild(newAssignedTo);

     // 
    const newDate = document.createElement('p');
    newDate.innerHTML = `Due: ${todoDate.value}`;
    newDate.classList.add('todo-item')
    todoDiv.appendChild(newDate);

    // Div container for buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');
    todoDiv.appendChild(buttonContainer);


    // Completed Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'Mark as Completed'
    completeButton.classList.add('completed-btn','btn','btn-primary');
    buttonContainer.appendChild(completeButton);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete'
    deleteButton.classList.add('delete-btn','btn','btn-danger');
    buttonContainer.appendChild(deleteButton);


   todoList.appendChild(todoDiv);
   todoName.value = "";
   todoDescription.value = "";
   todoAssignedTo.value = "";
   todoDate.value = "";
}