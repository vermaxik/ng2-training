import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  @Input() id:number;
  @Input() name:string;
  @Output() deleted:EventEmitter<number> = new EventEmitter();

  taskForm: FormGroup;
  defaultName: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.defaultName = this.name;
    this.taskForm = this.fb.group({
     name: [this.defaultName, Validators.required]
    });
  }

  revert() {
    this.taskForm.controls['name'].setValue(this.defaultName);
  }


  removed() {
    this.deleted.emit(this.id);
    console.log("Removed ");
  }

  save() {
    this.taskForm.get('name').reset(this.name);
  }
}
