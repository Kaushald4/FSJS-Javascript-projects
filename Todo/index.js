const inputEl = document.querySelector(".input");
const addBtnEl = document.querySelector(".addButton");
const itemEl = document.querySelector(".item");

//for editing todos
const onEditChangeHandle = (e, id) => {
    let allTodos = localStorage.getItem("todo");

    if (allTodos) {
        allTodos = JSON.parse(allTodos);
        allTodos.forEach((todo) => {
            if (todo.id === id) {
                todo.value = e.target.value;
            }
        });
        localStorage.setItem("todo", JSON.stringify(allTodos));
    }
};

const onEditClick = (id) => {
    const divEl = document.querySelectorAll(".todo-list");
    divEl.forEach((div) => {
        const curId = Number(div.getAttribute("data-id"));
        if (curId === id) {
            div.children[0].removeAttribute("disabled");
            div.children[0].addEventListener("input", (e) => onEditChangeHandle(e, id));
            div.children[0].focus();
            div.children[0].select();
        } else {
            div.children[0].setAttribute("disabled", "true");
            div.children[0].removeEventListener("input", onEditChangeHandle);
        }
    });
};
const onDeleteClick = (id) => {
    const divEl = document.querySelectorAll(".todo-list");
    divEl.forEach((div) => {
        const curId = Number(div.getAttribute("data-id"));
        if (curId === id) {
            //1. first remove from the localstorage
            let allTodos = localStorage.getItem("todo");

            if (allTodos) {
                allTodos = JSON.parse(allTodos);
                const updatedTodos = allTodos.filter((todo) => todo.id !== id);
                localStorage.setItem("todo", JSON.stringify(updatedTodos));
            }
            //2. remove from the document tree
            div.remove();
        }
    });
};

// localstorage
const addToLocalStorage = ({ id, value }) => {
    let prevTodo = localStorage.getItem("todo");
    if (prevTodo) {
        prevTodo = JSON.parse(prevTodo);
    }
    const newTodos = [];
    if (prevTodo) {
        console.log(prevTodo);
        newTodos.push(...prevTodo);
    }
    newTodos.push({ id, value });
    localStorage.setItem("todo", JSON.stringify(newTodos));
};
const fetchFromLocalStorage = () => {
    let allTodos = localStorage.getItem("todo");
    if (allTodos) {
        allTodos = JSON.parse(allTodos);
    }
    if (allTodos) {
        allTodos.forEach((todo, i) => {
            displayTodos({ id: todo.id, value: todo.value });
        });
    }
};

const displayTodos = ({ id, value }) => {
    const divEl = document.createElement("div");
    const todoInputEl = document.createElement("input");
    todoInputEl.setAttribute("type", "text");
    todoInputEl.setAttribute("class", "item_input");
    todoInputEl.setAttribute("disabled", "true");
    todoInputEl.value = value;
    divEl.setAttribute("data-id", id);
    divEl.setAttribute("class", "todo-list");
    divEl.style.marginBottom = "10px";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.setAttribute("class", "editButton");
    editBtn.onclick = () => {
        onEditClick(id);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "deleteButton");
    deleteBtn.onclick = () => {
        onDeleteClick(id);
    };

    divEl.appendChild(todoInputEl);
    divEl.appendChild(editBtn);
    divEl.appendChild(deleteBtn);

    itemEl.appendChild(divEl);
};

const addTodo = () => {
    //for generating random six digit id
    const id = Math.floor(10000 + Math.random() * 500000);

    addToLocalStorage({ id, value: inputEl.value });
    displayTodos({ id, value: inputEl.value });
    inputEl.value = "";
};

addBtnEl.addEventListener("click", addTodo);

// fetching all todos from localstorgae on initial page load
fetchFromLocalStorage();
