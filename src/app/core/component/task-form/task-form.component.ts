import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TasklistService } from '../../services/tasklist.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  @Output() getNewTask = new EventEmitter<any>


  constructor( private fb : FormBuilder, public service : TasklistService  ){}

  getTaskDetail = this.fb.group({
    text:['', [Validators.required]],
    day:['', [Validators.required]],
  })

  formSubmit(){
    let data = {
      text: this.getTaskDetail.value.text,
      day: this.getTaskDetail.value.day,
      isDone:false
    };
    this.service.createTask("/tasks", data ).subscribe((response)=>{
      this.getNewTask.emit(response)
      this.getTaskDetail.reset()
    })
  }

}
