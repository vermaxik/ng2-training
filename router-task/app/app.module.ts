import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import { RouterModule } from "@angular/router";

import { ExTasksListModule } from './tasks/tasks-list.module';
import { ExUsersListModule } from './users/users-list.module';

import { ExTasksListComponent } from "./tasks/tasks-list.component";
import { ExUsersListComponent } from "./users/users-list.component";


let appRoutes = [
            { path: 'tasks',
              component: ExTasksListComponent,
              data: {id: 1, name: 'Name'},
            },
            {path: 'users', component: ExUsersListComponent }
          ];

@NgModule({
  imports: [BrowserModule,
            ExTasksListModule,
            ExUsersListModule,
            RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
