import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styles: ['h1 {color: red}']
})
export class AppComponent {
  name = 'Angular';
}
