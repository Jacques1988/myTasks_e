import { Component, input } from '@angular/core';
import { Task } from '../../models/task';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [NgClass],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
 task = input.required<Task>()
 
}
