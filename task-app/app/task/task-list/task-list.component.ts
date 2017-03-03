import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: 'task-list.component.html'
})
export class TaskListComponent implements OnInit {
  @Input() tasks:Array<Task>;

  constructor() {}

  ngOnInit() {

  }
}
