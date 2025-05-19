import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Task } from '../../model/tasks';

@Component({
  selector: 'app-add-task-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task-component.component.html',
  styleUrl: './add-task-component.component.css',
})
export class AddTaskComponentComponent implements OnInit, AfterViewInit {
  @Output() taskAddedEvent = new EventEmitter<Task>();
  @ViewChild('titleField') titleRef!: ElementRef;

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.titleRef.nativeElement.focus();
  }

  formSubmit(form: NgForm) {
    console.log('form submited ');
    console.log(form.value);

    console.log(form.invalid);

    if (!form.invalid) {
      // Submit the form
      console.log('Form submitted successfully');

      const task: Task = {
        ...form.value,

        id: Math.floor(Math.random() * 1000),
      };
      this.taskAddedEvent.emit(task);
      form.resetForm();
    }
  }
}
