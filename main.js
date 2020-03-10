let todoList = [];
let resultArea = document.getElementById('resultArea');
let inputValue = document.getElementById('todoInput');

let addItem = () => {
    let todoValue = inputValue.value;
    todoList.push({text:todoValue, isDone: false });
    document.getElementById("todoInput").value = "";
    update()
    }

let update = () => {
    let items = "";
    for (let i=0; i< todoList.length; i++){
        items += `<li style="text-decoration:${todoList[i].isDone ? 'line-through' : ""}" 
        onclick="mark(${i})">${todoList[i].text} 
        <a>${todoList[i].isDone ? 'Mark undone' : 'Mark done' }</a> 
        <button id="deleteBtn "href='#' onclick="remove(${i})">Delete</button></li>`;
    }
    resultArea.innerHTML = items;

    }
    


let remove = (i) => { 
    todoList.splice(i, 1)
    update();
}

let mark = (i) => {
    todoList[i].isDone = !(todoList[i].isDone)
    update()
}