import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainTaskComponent } from './main-task.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'tasks', component: MainTaskComponent}
]

@NgModule({
  declarations: [MainTaskComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class MainTaskModule { }
