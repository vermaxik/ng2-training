import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'task',
  templateUrl: 'task.component.html'
})
export class TaskComponent {
  @Input() id:number;
  @Input() name:string;
  @Output() deleted:number = new EventEmitter();

  removed() {
    this.deleted.emit(this.id);
    console.log("Removed ");
  }
}
