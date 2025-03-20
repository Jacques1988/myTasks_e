import { Component } from '@angular/core';
import { TaskItemComponent } from "./task-item/task-item.component";

@Component({
  selector: 'app-task-list',
  imports: [TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

}
