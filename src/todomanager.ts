import { todo } from "./todos";
import { Storage } from "./localStorage";

export class todoManager {
    todos: todo[] = []


    constructor() {
        this.todos = Storage.getTodo();
    }

    addTodo(todo: todo): boolean {
        if(todo.taskname === "" || todo.description === "" || todo.deadline === "") {
            return false;
        }

        this.todos.push(todo)
        Storage.storeTodo(this.todos)

        return true;
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id)
        Storage.storeTodo(this.todos)
    }

    todoCompleted(id: number): void {
        const findTodo = this.todos.find(t => t.id === id);
        if(findTodo) {
            findTodo.completed = true;
            Storage.storeTodo(this.todos)
        }
    }

}