import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { TaskModule } from './task/task.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [BrowserModule, TaskModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
