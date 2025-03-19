import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { FilterControlsComponent } from "./filter-controls/filter-controls.component";

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, FilterControlsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myTasks';
}
