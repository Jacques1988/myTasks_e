import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FilterControlsComponent } from "./filter-controls/filter-controls.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FilterControlsComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myTasks';
}
