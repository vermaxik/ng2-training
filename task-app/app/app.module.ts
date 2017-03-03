import { NgModule, Component } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { TaskModule } from './task/task.module';
import { AppComponent } from './app.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TaskService } from './task/task.service';
import { RouterModule } from "@angular/router";

import { TaskComponent } from './task/task/task.component';

let appRoutes = [{path: 'tasks', component: TaskComponent }];

@NgModule({
  imports: [ BrowserModule,
             HttpModule,
             TaskModule,
             InMemoryWebApiModule.forRoot(TaskService),
             RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
