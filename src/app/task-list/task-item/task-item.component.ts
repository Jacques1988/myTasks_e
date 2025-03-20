import { Component, input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
 task = input.required<Task>()


}
