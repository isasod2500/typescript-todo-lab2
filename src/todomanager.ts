import { todo } from "./todos";
import { Storage } from "./localStorage";

export class todoManager {
    todos: todo[] = []


    constructor() {
        this.todos = Storage.getTodo();
    }

    addTodo(taskname: string, description: string, deadline: string, priority: number, completed: boolean, id: number): boolean {
        if (taskname === "" || description === "" || deadline === "") {
            return false;
        }

        const newTodo = new todo(taskname, description, deadline, priority, completed, id)
        this.todos.push(newTodo)
        Storage.storeTodo(this.todos)

        return true;
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id)
        Storage.storeTodo(this.todos)
    }

    todoCompleted(id: number): void {
        const findTodo = this.todos.find(t => t.id === id);
        if (findTodo) {
            findTodo.completed = true;
            Storage.storeTodo(this.todos)
        }
    }

}