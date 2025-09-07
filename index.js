let todo = JSON.parse(localStorage.getItem('move')) || [];  
displayTodo();
displayCount();

function addTodoMove() {
    const todoInputElement = document.querySelector(".js-todo-input");
    const todoDueElement = document.querySelector(".js-todo-due");

    const name = todoInputElement.value.trim();
    const due = todoDueElement.value;

    if (!name || !due) {
        alert("Please enter a task and select a due date!");
        return;
    }

    todo.push({ name: name, date: due });

    
    localStorage.setItem('move', JSON.stringify(todo));

    displayTodo();
    displayCount();
    todoInputElement.value = '';
    todoDueElement.value = '';
}

function displayTodo() {
    let result = '';
    for (let i = 0; i < todo.length; i++) {
        const html = `
        <p>${todo[i].name}</p>
        <p>${todo[i].date}</p>
        <button class="todo-delete-button" onclick="
            todo.splice(${i},1);
            localStorage.setItem('move', JSON.stringify(todo));
            displayTodo();
            displayCount();
        ">Delete</button>
        `;
        result += html;
    }
    document.querySelector(".js-todo-list").innerHTML = result;
}
function displayCount()
{
    if(todo.length==0)
    {
        document.querySelector(".js-stats").innerHTML=`Todo is empty!`
    }
    else{
        document.querySelector(".js-stats").innerHTML=`You have ${todo.length} actions to do...`
    }
}


