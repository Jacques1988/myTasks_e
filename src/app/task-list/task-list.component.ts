import { Component, inject } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskService = inject(TasksService);
  tasks = this.taskService.getAllTasks();

  updateTask(task: Task) {
    this.taskService.updateTask(task);
  }
}
