import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form.component';

const taskformRoutes: Routes = [
  {
    path: '',
    component: TaskFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(taskformRoutes)],
  exports: [RouterModule],
})
export class TaskFormRoutingModule {}
