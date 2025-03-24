import { Component, input, output } from '@angular/core';
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
 updateTaskEvent = output()

 toggleStatus(){
  this.task().checked = !this.task().checked
  this.task().checked ? this.task().status = "completed" : this.task().status = "incomplete"

  this.updateStatus()
 }

 updateStatus(){
  this.updateTaskEvent.emit()
 }
}
