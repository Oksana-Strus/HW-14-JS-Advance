import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lesson14HW';
  newTaskName = '';
  array: Array<ITask> = [];


  addNewTask(): void {
    if (this.newTaskName) {
      let task = new Task(this.newTaskName);
      this.array.push(task);
      this.newTaskName = '';
    }
    else {
    }
  }

  refreshTasks(tasks: Array<ITask>): void {
    this.array = tasks;
  }
}


export interface ITask {
  name: string,
  isDone: boolean,
}

export class Task implements ITask {
  constructor(
    public name: string,
    public isDone: boolean = false,
  ) { }

}

