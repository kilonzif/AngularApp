import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  implements OnInit{

  ngOnInit(): void {
    this.taskList = window.localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')!) : []
  }
  taskList: any[] = []
      newTodoForm = this.formBuilder.group({
        todoItem: ''
      })
        
      constructor(
        private formBuilder: FormBuilder
      ) { }
      
      completed: boolean = false;
      i:any;

      addTask() {
        const value = this.newTodoForm.value.todoItem
        this.taskList.push({ id: this.taskList.length, name: value })
        window.localStorage.setItem('task', JSON.stringify(this.taskList))
        this.newTodoForm.reset(); 
      }

      markDone(value: any) {
        value.completed = !value.completed
        value.completed === true ?
          this.taskList.push(this.taskList.splice(this.taskList.indexOf(value), 1)[0]) :
          this.taskList.unshift(this.taskList.splice(this.taskList.indexOf(value), 1)[0])
      }

      removeTask(i: any) {
        this.taskList.splice(i, 1)
        window.localStorage.setItem('task', JSON.stringify(this.taskList))
 
      }

}

