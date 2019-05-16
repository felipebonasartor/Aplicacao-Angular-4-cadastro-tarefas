import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { PagerService } from './page.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    providers: [TaskService, PagerService]
})
export class TaskListComponent implements OnInit {
    taskList: any[] = [];
    pager: any = {};
    pagedItems: any[];

    constructor(
        private taskService: TaskService,
        private pagerService: PagerService,
        private router: Router
    ) { }

    loadPage() {
        this.taskService.getAll()
            .subscribe(
                taskList => {
                    this.taskList = taskList

                    this.setPage(1);
                },
                error => console.log(error)
            );
    }

    ngOnInit() {
        this.loadPage();
    }

    setPage(page: number) {
        this.pager = this.pagerService.getPager(this.taskList.length, page);
        this.pagedItems = this.taskList.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

    removeTask(taskId) {
        this.taskService.remove(taskId)
            .subscribe(
                () => { this.loadPage(); },
                error => console.log(error)
            );
    }
}