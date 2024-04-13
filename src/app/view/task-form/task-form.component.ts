import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasklistService } from '../../core/services/tasklist.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Output() getNewTask = new EventEmitter<any>();

  constructor(private fb: FormBuilder, public service: TasklistService) {}

  ngOnInit(): void {}

  getTaskDetail = this.fb.group({
    text: ['', [Validators.required]],
    date: [{ day: 0, month: 0, year: 0 }, [Validators.required]],
    description: [''],
  });

  formSubmit() {
    let data = {
      ...this.getTaskDetail.value,
      date: `${this.getTaskDetail?.value?.date?.day}/${this.getTaskDetail?.value?.date?.month}/${this.getTaskDetail?.value?.date?.year}`,
      isDone: false,
    };
    this.service.createTask('/tasks', data).subscribe((response) => {
      this.getNewTask.emit(response);
      this.getTaskDetail.reset();
    });
  }
}
