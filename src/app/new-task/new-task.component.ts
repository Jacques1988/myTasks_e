import { Component, ElementRef, viewChild, inject } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  taskService = inject(TasksService)
  inputReference = viewChild<ElementRef<HTMLInputElement>>('inputTaskField')
  
  addTask(){
    let taskValue = this.inputReference()!.nativeElement.value
    this.taskService.createTask(taskValue)
  }
}
