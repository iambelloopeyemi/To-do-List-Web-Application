// Create a simple todo list that has the following functionalities

/**
 * add a new item to the todo list
 * remove an item in the todo list
 * edit an item in the todo list

Some further requirements:
 * the input field must be reset when the add button is clicked on 
 * the todo list must show the most recent first
*/

let todoList = [];


// Select the elements needed for the task

let newTask = document.getElementById('new-task');
let addButton = document.getElementById('add-button');
let incompleteTask = document.getElementById('incomplete-tasks');

addButton.addEventListener('click', addItem);

function addItem (item) {
    
    // Create a new li element
    let newLiElement = document.createElement('li');
    // Create a new p element
    let newPElement = document.createElement('p');
    // Create two new button elements
    // let firstButtonElement = document.createElement('button');
    let secondButtonElement = document.createElement('button');
    // Add class name to the button elements
    // firstButtonElement.classList = 'edit-button';
    secondButtonElement.classList = 'delete-button';
    // Append a text node inside the button elements
    // firstButtonElement.appendChild(document.createTextNode('Edit'));
    secondButtonElement.appendChild(document.createTextNode('Delete'));
    // Append the new p and button elements inside the new li element
    newLiElement.appendChild(newPElement);
    // newLiElement.appendChild(firstButtonElement);
    newLiElement.appendChild(secondButtonElement);
    // Append input value inside new p element
    let inputValue = document.createTextNode(newTask.value);
    newPElement.appendChild(inputValue);
    // Append the new li element inside incomplete task
    if (newTask.value === '') {
        alert('Input a task');
    } else {
        let newTodo = incompleteTask.appendChild(newLiElement);
        incompleteTask.prepend(newTodo);
        // incompleteTask.appendChild(newLiElement);
        newTask.value = ''
    }
    
    
}

incompleteTask.addEventListener('click', deleteItem);

function deleteItem (item) {

    if (item.target.classList.contains('delete-button')) {
        let li = item.target.parentElement;
        incompleteTask.removeChild(li);
    }

}

// incompleteTask.addEventListener('click', editItem);

// function editItem (item) {


// }