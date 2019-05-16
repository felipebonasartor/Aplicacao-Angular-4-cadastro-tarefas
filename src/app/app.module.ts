import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { AppRoutingModule } from './app.routing.module';

import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TaskModule,
    CommonModule,
    Angular2FontawesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
