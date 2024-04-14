import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksRoutingModule } from './tasksRouting.module';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskItemEditComponent } from './task-item-edit/task-item-edit.component';

@NgModule({
  declarations: [TasksComponent, TaskItemComponent, TaskItemEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    TasksRoutingModule,
    CoreModule,
  ],
})
export class TasksModule {}
