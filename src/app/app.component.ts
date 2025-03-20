import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FilterControlsComponent } from "./filter-controls/filter-controls.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskListComponent } from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FilterControlsComponent, NewTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myTasks';
}
