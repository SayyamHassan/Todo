import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent], // Import CommonModule here
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem: string = '';
  todos: Todo[];

  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      this.localItem = localStorage.getItem('todos') || '[]';
      this.todos = JSON.parse(this.localItem);
    } else {
      this.todos = [];
    }
  }

  deleteTodo(todo:Todo){
console.log(todo);
const index = this.todos.indexOf(todo);
this.todos.splice(index,1)
localStorage.setItem("todos",JSON.stringify(this.todos))
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos))
      }
      ToggleTodo(todo:Todo){
       const index = this.todos.indexOf(todo);
       this.todos[index].active = !this.todos[index].active;
        localStorage.setItem("todos",JSON.stringify(this.todos))
          }
}
