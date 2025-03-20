import { Component, inject} from '@angular/core';
import { TaskItemComponent } from "./task-item/task-item.component";
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent{
 tasks = inject(TasksService).getAllTasks()


}
