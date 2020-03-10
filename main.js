let todoList = [];
let resultArea = document.getElementById('resultArea');
let inputValue = document.getElementById('todoInput');

let addItem = () => {
    let todoValue = inputValue.value;
    todoList.push({ text: todoValue, isDone: false });
    document.getElementById("todoInput").value = "";
    saveTodos()
    update()
}

let update = () => {
    let items = "";
    for (let i = 0; i < todoList.length; i++) {
        items += `<li style="text-decoration:${todoList[i].isDone ? 'line-through' : ""}" 
        onclick="mark(${i})">${todoList[i].text} 
        <div class="textColor"><a>${todoList[i].isDone ? 'Mark undone' : 'Mark done'}</a></div><br>
        <button id="deleteBtn "href='#' onclick="remove(${i})">Delete</button></div></li>`;
    }
    resultArea.innerHTML = items;
}

let remove = (i) => {
    todoList.splice(i, 1)
    update();
    saveTodos()
}

let mark = (i) => {
    todoList[i].isDone = !(todoList[i].isDone)
    update()
    saveTodos()
}
//Save data to local storage
let saveTodos = () => {
    let str = JSON.stringify(todoList);
    localStorage.setItem('todoList', str);
}

// Get data from local storage

let getTodos = () => {
    let str = localStorage.getItem('todoList');
    todoList = JSON.parse(str);
    if (!todoList) {
        todoList = []
    }
}

saveTodos()
update()