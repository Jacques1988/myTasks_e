import { Component, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-filter-controls',
  imports: [],
  templateUrl: './filter-controls.component.html',
  styleUrl: './filter-controls.component.css'
})
export class FilterControlsComponent {
  taskService = inject(TasksService)


  getAllTasks(){
    this.taskService.getAllTasks()
  }

  getCompletedTasks(){
    this.taskService.getCompletedTasks()
  }

  getIncompletedTasks(){
    this.taskService.getIncompletedTasks()
  }
}
