function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todo = todoInput.value.trim();
  if (todo) {
    db.collection("todos").add({ task: todo }).then(() => {
      todoInput.value = "";
      loadTodos();
    });
  }
}

function loadTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";
  db.collection("todos").get().then(snapshot => {
    snapshot.forEach(doc => {
      const li = document.createElement("li");
      li.textContent = doc.data().task;
      todoList.appendChild(li);
    });
  });
}

document.addEventListener("DOMContentLoaded", loadTodos);