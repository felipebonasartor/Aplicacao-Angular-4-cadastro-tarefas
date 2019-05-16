import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  providers: [TaskService]
})
export class TaskFormComponent implements OnInit {
  taskForm: FormGroup;
  task: any = {};

  constructor(
    formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.taskForm = formBuilder.group({
      description: ['', Validators.compose([
        Validators.required, Validators.maxLength(50)
      ])]
    });
  }

  ngOnInit() {
    this.activatedRoute
      .queryParams
      .subscribe(params => {
        const taskId = params['taskId'];
        
        if (taskId) {
          this.taskService.getById(taskId)
            .subscribe(
              task => {
                this.task = task[0];
              },
              error => console.log(error)
            );
        }
      });
  }

  save(event) {
    event.preventDefault();

    this.taskService.save(this.task)
      .subscribe(
        () => this.router.navigate(['/task/all']),
        error => console.log(error)
      );
  }
}
