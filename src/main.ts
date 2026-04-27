import { todoManager } from "./todomanager.ts"
import { todo } from "./todos.ts"
import { Storage } from "./localStorage.ts"

document.addEventListener("DOMContentLoaded", () => {
  showTodos()
  const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement
  submitBtn.addEventListener("click", addTodo)



})

function showTodos() {
  const todos = Storage.getTodo()
  let todoNow = document.getElementById("ongoing") as HTMLDivElement
  let todoDone = document.getElementById("completed") as HTMLDivElement

  if (todos) {
    todoNow.innerHTML = "";
    todoDone.innerHTML = "";
    todos.forEach((todo) => {
      let todoName = document.createElement("h2") as HTMLHeadingElement
      let todoDesc = document.createElement("p") as HTMLParagraphElement
      let todoDeadline = document.createElement("p") as HTMLParagraphElement
      let todoStatus = document.createElement("h3") as HTMLHeadingElement
      const divider = document.createElement("div") as HTMLDivElement
      divider.setAttribute("class", "divider")

      todoName.innerHTML = todo.taskname
      todoDesc.innerHTML = `Att göra: ${todo.description}`
      todoDeadline.innerHTML = `Tills: ${todo.deadline}`

      const deleteBtn = document.createElement("button")
      deleteBtn.innerHTML = `Ta bort uppgift`
      deleteBtn.className = `deleteBtn`

      const markDoneBtn = document.createElement("button")
      markDoneBtn.innerHTML = `Markera som färdig`
      markDoneBtn.className = `markDoneBtn`

      if (todo.completed === true) {
        todoStatus.innerHTML = `Status: Slutförd`
        todoDone.appendChild(todoName)
        todoDone.appendChild(todoDesc);
        todoDone.appendChild(todoDeadline)
        todoDone.appendChild(todoStatus)
        todoDone.appendChild(deleteBtn)
        todoDone.appendChild(divider)
      } else {
        todoStatus.innerHTML = `Status: Pågående`
        todoNow.appendChild(todoName)
        todoNow.appendChild(todoDesc);
        todoNow.appendChild(todoDeadline)
        todoNow.appendChild(todoStatus)
        todoNow.appendChild(markDoneBtn)
        todoNow.appendChild(deleteBtn);
        todoNow.appendChild(divider)
      }
      deleteBtn.addEventListener("click", () => {
        removeTodo(todo.id)
      })

      markDoneBtn.addEventListener("click", () => {
        markTodoCompleted(todo.id)
      })

    })

  }
}

function addTodo() {
  let nameInput = document.getElementById("taskname") as HTMLInputElement
  let descInput = document.getElementById("description") as HTMLInputElement
  let deadlineInput = document.getElementById("deadline") as HTMLInputElement
  let prioInput = document.getElementById("priority") as HTMLInputElement
  let statusInput = document.getElementById("status") as HTMLInputElement


  const taskname = nameInput.value
  const description = descInput.value
  const deadline = deadlineInput.value
  const priority = Number(prioInput.value)
  const status = statusInput.value === "true"


  if (taskname && description && deadline) {
    const manager = new todoManager()
    const newTodo = new todo(taskname, description, deadline, priority, status, manager.todos.length)
    manager.addTodo(newTodo)
    nameInput.value = "";
    descInput.value = "";
    deadlineInput.value = "";
    prioInput.value = "";
    statusInput.value = "";
    console.log(newTodo)

    showTodos();

  }
}

function removeTodo(id: number): void {
  const manager = new todoManager();

  manager.removeTodo(id)
  Storage.storeTodo(manager.todos)
  showTodos()

}

function markTodoCompleted(id: number) {
  const manager = new todoManager();

  manager.todoCompleted(id)
  Storage.storeTodo(manager.todos)
  showTodos();
}