import { Injectable, signal } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = tasks;
  filteredTasks = signal<Task[]>(this.tasks)
  constructor() {}

  getAllTasks() {
    this.filteredTasks.set(this.tasks)
    return this.filteredTasks()
  }

  createTask(task: string){
    const newTask = {
      id: this.tasks.length +1,
      task: task,
      status: 'incomplete',
      checked: false
    }
    this.tasks.push(newTask)
  }

  updateTask(updatedTask: Task) {
    let taskIndex = this.tasks.findIndex(
      (task: Task) => task.id === updatedTask.id
    );
    this.tasks.splice(taskIndex, 1);
    this.tasks.splice(taskIndex, 0, updatedTask);
  }

  deleteTask(deleteTask: Task){
    let taskIndex = this.tasks.findIndex((task : Task) => task.id === deleteTask.id)
    this.tasks.splice(taskIndex, 1)
  }

  getCompletedTasks(){
    this.filteredTasks.set(this.tasks.filter((task: Task) => task.status === "completed"))
  }

  getIncompletedTasks(){
    this.filteredTasks.set(this.tasks.filter((task: Task) => task.status === "incomplete"))
  }
}
