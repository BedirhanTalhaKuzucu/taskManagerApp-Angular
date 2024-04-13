import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './view/task-form/task-form.component';
import { TasksComponent } from './view/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./view/task-form/task-form.module').then((m) => m.TaskFormModule),
  },
  {
    path: 'tasklist',
    loadChildren: () =>
      import('./view/tasks/tasks.module').then((m) => m.TasksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
