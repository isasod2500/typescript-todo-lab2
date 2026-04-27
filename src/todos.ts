import type { TodoInterface } from "./todoInterface";


export class todo implements TodoInterface {
    taskname: string;
    description: string;
    deadline: string;
    priority: number;
    completed: boolean;
    id: number;

    constructor(taskname: string, description: string, deadline: string, priority: number, completed: boolean, id: number) {
        this.taskname = taskname;
        this.description = description;
        this.deadline = deadline;
        this.priority = priority;
        this.completed = completed;
        this.id = id;
    }

}