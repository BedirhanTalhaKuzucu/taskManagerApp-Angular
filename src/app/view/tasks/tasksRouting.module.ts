import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskItemEditComponent } from './task-item-edit/task-item-edit.component';

const tasksRoutes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  { path: ':id', component: TaskItemEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(tasksRoutes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
