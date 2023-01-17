import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  @Input() task :any
  @Input() index :any
  @Output() getIdtoDelete = new EventEmitter<any>

  isFinished:boolean | undefined

  constructor( public service : TasklistService  ){}


  deleteTask(id:any){
    this.service.deleteTaskList("/tasks", this.task.id).subscribe((item)=> {
      this.getIdtoDelete.emit(id)
    })
  }

  ngOnInit(): void {
    this.isFinished = this.task.isDone
  }

  makeDone(){
    this.isFinished = !this.isFinished
    this.task.isDone = this.isFinished
    this.service.doneTask("/tasks", this.task).subscribe((item)=>{
      console.log(item)
    })
  }


}
