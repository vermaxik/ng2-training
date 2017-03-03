import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component'
import { TaskComponent } from './task/task.component'
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TaskComponent, TaskListComponent],
  exports: [TaskListComponent],
  providers: []
})

export class TaskModule {

}
