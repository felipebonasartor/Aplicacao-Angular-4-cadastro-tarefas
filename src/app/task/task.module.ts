import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskFilter } from './task-list/task-filter.pipe';

@NgModule({
    declarations: [TaskListComponent, TaskFormComponent, TaskFilter],
    imports: [HttpClientModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
    exports: [TaskListComponent]    
})
export class TaskModule { }
