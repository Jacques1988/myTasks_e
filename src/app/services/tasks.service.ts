import { Injectable } from '@angular/core';
import { tasks } from '../mock-data';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
tasks = tasks
  constructor() { }


getAllTasks(){
  return this.tasks
}

}
