//your code here

const input = document.getElementById("newTodoInput")
const button = document.getElementById("addTodoBtn")
const list = document.getElementById("todoList")
const todo = [];
button.addEventListener("click", ()=>{
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <span>${taskText}</span>
    `;
    list.appendChild(taskItem);

    // Clear the input field
    input.value = "";
})