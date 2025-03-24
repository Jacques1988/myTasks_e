import { Injectable } from '@angular/core';
import { tasks } from '../mock-data';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasks = tasks;
  constructor() {}

  getAllTasks() {
    return this.tasks;
  }

  updateTask(updatedTask: Task) {
    let taskIndex = this.tasks.findIndex(
      (task: Task) => task.id === updatedTask.id
    );
    this.tasks.splice(taskIndex, 1);
    this.tasks.splice(taskIndex, 0, updatedTask);
  }
}
