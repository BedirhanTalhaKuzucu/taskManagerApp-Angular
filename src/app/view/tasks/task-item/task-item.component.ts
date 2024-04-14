import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HighlightDirective } from 'src/app/core/directives/highlight.directive';
import { TasklistService } from 'src/app/core/services/tasklist.service';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: any;
  @Input() index: any;
  @Output() getIdtoDelete = new EventEmitter<any>();

  isFinished: boolean | undefined;

  constructor(public service: TasklistService, private route: Router) {}

  deleteTask(id: any) {
    this.service.deleteTaskList('/tasks', this.task.id).subscribe((item) => {
      this.getIdtoDelete.emit(id);
    });
  }

  ngOnInit(): void {
    this.isFinished = this.task.isDone;
  }

  makeDone() {
    this.isFinished = !this.isFinished;
    this.task.isDone = this.isFinished;
    this.service.editTask('/tasks', this.task).subscribe((item) => {
      console.log(item);
    });
  }

  goToDetails(event: MouseEvent) {
    event.stopPropagation();
    this.route.navigate(['tasklist', this.task.id]);
  }
}
