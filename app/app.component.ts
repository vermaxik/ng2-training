import { Component, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styles: ['h1 {color: red}']
})
export class AppComponent {
  name = 'Angular';

  tasks:Array<Task> = [
    {id: 1, name: 'First', description: 'description'},
    {id: 2, name: 'Second'},
    {id: 3, name: 'Third'},
  ]

  deleteItem(id:number) {
    console.log(id);
  }
}
