import { todo } from "./todos";

export class Storage {
    
    static storeTodo(todos: todo[]) {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    static getTodo(): todo[] {
        const todoEntry = localStorage.getItem("todos")
        if(todoEntry) {
            return JSON.parse(todoEntry)
        } else {
            return [];
        }
    }
}