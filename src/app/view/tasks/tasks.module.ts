import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksRoutingModule } from './tasksRouting.module';

@NgModule({
  declarations: [TasksComponent, TaskItemComponent],
  imports: [CommonModule, TasksRoutingModule],
})
export class TasksModule {}
