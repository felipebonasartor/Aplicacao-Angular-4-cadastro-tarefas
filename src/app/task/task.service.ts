import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Task } from "./task";

const API = 'http://localhost:3000';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) { }

    getById(taskId: number) {
        return this.http
            .get<{ tasks: Task[] }>(`${API}/api/task/${taskId}`)
            .map(res => res);
    }

    getAll() {
        return this.http
            .get<Task[]>(`${API}/api/task`)
            .map((res) => res || []);
    }

    save(task: Task) {
        if (task.id > 0)
            return this.http.put<Task>(`${API}/api/task/${task.id}`, task, httpOptions);
        else
            return this.http.post<Task>(`${API}/api/task`, task, httpOptions);
    }

    remove(taskId) {
        return this.http.delete(`${API}/api/task/${taskId}`, httpOptions);
    }
}