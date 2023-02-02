import { Component, OnInit } from '@angular/core';
import { TasklistService } from './core/services/tasklist.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  openClose:boolean = true
  taskList: any = []

  constructor(
    //  public service : TasklistService 
    ){}

  ngOnInit(): void {
    // this.service.getTaskList("/tasks").subscribe((list)=>{
    //   this.taskList = list
    //   console.log(this.taskList.length )
    // })
  }

  openCloseMethod(value: any){
    console.log(value)
    this.openClose = value
  }

  deleteTask(taskId:any){
    this.taskList = this.taskList.filter((item:any)=>{
      return item.id != taskId 
    })
  }

  getNewTask(task:any){
    this.taskList.push(task)
  }

}
