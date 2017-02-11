import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component'
import { TaskComponent } from './task/task.component'
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [TaskComponent, TaskListComponent],
  exports: [TaskListComponent]
})

export class TaskModule {

}
