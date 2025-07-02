import { Component } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-todos',
  standalone: false,
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  todoSignal = signal<Todo[]>([]);

  completedFilterValue = false;

  // todos:Todo[]=[]

  constructor(private todoService: TodoService, private tost: ToastrService) {
    this.getTodos();
  }

  deleteTodo(todoId: string | undefined) {
    if (todoId) {
      this.todoService.removeTodo(todoId).subscribe({
        next: (response) => {
          this.tost.success('Deleted');
        },
        error: (error) => {
          this.tost.error('Error in deleting');
        },
      });
    }
  }

  filterByCompleted() {
    console.log(this.completedFilterValue);

    if (typeof this.completedFilterValue === 'string') {
      this.getTodos();
      return;
    }

    this.todoService
      .getTodoByCompletedStatus(this.completedFilterValue)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.todoSignal.set(response);
        },
        error: (error) => {
          console.log(error);
          this.tost.error('Error in fetching todos');
        },
      });
  }

  private getTodos() {
    this.todoService.getTodos().subscribe({
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
