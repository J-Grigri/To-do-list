let todoList = [];
let NewArray
let resultArea = document.getElementById('resultArea');
let inputValue = document.getElementById('todoInput');

let addItem = () => {
    let todoValue = inputValue.value;
    todoList.push({ text: todoValue, isDone: false });
    document.getElementById("todoInput").value = "";
    saveTodos()
    update(todoList)
}

let update = (array) => {
    let items = "";
    for (let i = 0; i < array.length; i++) {
        items += `<div style="display:flex; justify-content: space-between; width:100%; padding-right:20px;">
        <div>
        <li style="text-decoration:${array[i].isDone ? 'line-through' : ""}" 
        >${array[i].text} 
        <span style="color:"class="textColor" onclick="toggle(${i})"><a>${array[i].isDone ? 'Mark undone' : 'Mark done'}</a></span></div>
        <button id="deleteBtn "href='#' onclick="remove(${i})">Delete</button></li>
        </div>`;
    }
    resultArea.innerHTML = items;
}
//above section needs if / else to further modify. Instead of forloop use .map
let remove = (i) => {
    todoList.splice(i, 1)
    console.log(todoList)
    update(todoList);
    saveTodos()
}
//Show undone
let showUndone = () => {
    if (document.getElementById("show").checked===true){
        let newArray = todoList.filter((item)=>item.isDone === false)
        console.log(newArray)
        update(newArray)
    }else{
        console.log(todoList);
        update(todoList)
    }
}

let toggle = (i) => {
    todoList[i].isDone = !(todoList[i].isDone)
    update(todoList)
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

getTodos()
update()
