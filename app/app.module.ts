import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TaskModule } from './task/task.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TaskService } from './task/task.service';

@NgModule({
  imports: [BrowserModule, HttpModule, TaskModule, InMemoryWebApiModule.forRoot(TaskService)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
