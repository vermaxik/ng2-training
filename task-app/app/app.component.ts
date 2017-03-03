import { Component, Output, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styles: ['h1 {color: red}']
})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor(private http: Http) {}

  tasks:Observable<Task>

  ngOnInit() {
    this.http.get("app/tasks").subscribe(result => this.tasks = result.json().data);
  }

  deleteItem(id:number) {
    console.log(id);
  }
}
