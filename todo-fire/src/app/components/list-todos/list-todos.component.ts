import { Component } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { signal } from '@angular/core';
@Component({
  selector: 'app-list-todos',
  standalone: false,
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todoSignal = signal<Todo[]>([]);

  // todos:Todo[]=[]

  constructor(private todoService: TodoService) {
    todoService.getTodos().subscribe({
      next: (response) => {
        console.log(response);
        this.todoSignal.set(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
