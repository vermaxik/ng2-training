import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { TableComponent } from "./table/table.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TableComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
