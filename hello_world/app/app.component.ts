import { Component } from '@angular/core';

const VALUES = [ "Hello World", "Привет Мир","Привіт Світ",
                 "Hola Mundo", "Bonjour le monde", "Hallo Welt",
                  "Ciao mondo", "Witaj świecie", "Hej världen",
                  "Pozdravljen, svet", "Прывітанне Сусвет"];

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello World!!!</h1>
    <select>
      <option *ngFor="let value of greetings">{{value}}
    </select>
    `
})

export class AppComponent {

  greetings = VALUES;

}
