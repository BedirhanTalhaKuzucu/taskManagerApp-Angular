import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasklistService } from 'src/app/core/services/tasklist.service';

@Component({
  selector: 'app-task-item-edit',
  templateUrl: './task-item-edit.component.html',
  styleUrls: ['./task-item-edit.component.css'],
})
export class TaskItemEditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public service: TasklistService,
    private router: Router
  ) {}

  details: any;
  updated = false;
  getTaskDetail = this.fb.group({
    text: ['', [Validators.required]],
    date: [{ day: 0, month: 0, year: 0 }, [Validators.required]],
    description: [''],
  });

  ngOnInit(): void {
    this.service.getTask(this.router.url).subscribe((item) => {
      let dateFormat = item.date.split('/');
      this.getTaskDetail.setValue({
        text: item.text,
        date: {
          day: parseInt(dateFormat[0], 10),
          month: parseInt(dateFormat[1], 10),
          year: parseInt(dateFormat[2], 10),
        },
        description: item.description,
      });

      this.details = item;
    });
  }

  formSubmit() {
    let data = {
      ...this.getTaskDetail.value,
      date: `${this.getTaskDetail?.value?.date?.day}/${this.getTaskDetail?.value?.date?.month}/${this.getTaskDetail?.value?.date?.year}`,
      isDone: false,
      id: this.details.id,
    };

    this.service.editTask('/tasks', data).subscribe((item) => {
      this.updated = true;
      console.log(item);
      setTimeout(() => {
        this.updated = false;
      }, 1000);
    });
  }
}
