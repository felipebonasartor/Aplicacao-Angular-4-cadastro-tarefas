import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../task';

@Pipe({
    name: 'taskFilterDescription'
})
export class TaskFilter implements PipeTransform {
    transform(tasks: Task[], description: string) {
        if (description) {
            description = description.toLowerCase();
            return tasks.filter(task =>
                task.description.toLowerCase().includes(description)
            );
        }
        else {
            return tasks;
        }
    }
}