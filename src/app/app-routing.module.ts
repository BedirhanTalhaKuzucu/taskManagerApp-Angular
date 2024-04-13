import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './view/task-form/task-form.component';
import { TasksComponent } from './view/tasks/tasks.component';

const routes: Routes = [
  { path: '', component: TaskFormComponent },
  { path: 'tasklist', component: TasksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
