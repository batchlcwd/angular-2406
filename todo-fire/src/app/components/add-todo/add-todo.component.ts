import { Component } from '@angular/core';
import { Todo, TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-todo',
  standalone: false,
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  constructor(private todoService: TodoService, private toast: ToastrService) {}

  todo: Todo = {
    title: '',
    content: '',
    isCompleted: false,
    images: [],
  };

  formSubmit(event: any) {
    event.preventDefault();
    console.log(this.todo);
    this.todoService.addTodo(this.todo).subscribe({
      next: (repsonse) => {
        console.log('todo is added');
        console.log(repsonse);
        this.toast.success('Todo added');
        this.todo = {
          title: '',
          content: '',
          isCompleted: false,
          images: [],
        };
      },
      error: (error) => {
        console.log('error in adding todo');
        console.log(error);
        this.toast.error('Error in adding todo');
      },
    });
  }
}
