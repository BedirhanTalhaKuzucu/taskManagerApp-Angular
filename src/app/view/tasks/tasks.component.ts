import { Component, OnInit } from '@angular/core';
import { TasklistService } from '../../core/services/tasklist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  taskList: any = [];

  constructor(public service: TasklistService, private router: Router) {}

  deleteTask(taskId: any) {
    this.taskList = this.taskList.filter((item: any) => {
      return item.id != taskId;
    });
  }

  ngOnInit(): void {
    this.service.getTaskList('/tasks').subscribe((list) => {
      this.taskList = list;
      console.log(this.taskList.length);
    });
  }
}
