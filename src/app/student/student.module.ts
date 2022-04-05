import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StudentLoginComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    StudentLoginComponent,
    TodoListComponent
  ]


})
export class StudentModule { }
