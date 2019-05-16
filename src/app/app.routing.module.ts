import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskFormComponent } from './task/task-form/task-form.component';

const routes: Routes = [
    { path: '', component: TaskListComponent },
    { path: 'task/all', component: TaskListComponent },
    { path: 'task/editor', component: TaskFormComponent },
    { path: '**', component: TaskListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }