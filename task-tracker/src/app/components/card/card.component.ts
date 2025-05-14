import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/tasks';

@Component({
  selector: 'task-card',
  template: `<div
    class="rounded-lg shadow-md overflow-hidden"
    [ngClass]="{
      'bg-green-200': task.isCompleted,
      'bg-red-200': !task.isCompleted
    }"
  >
    <img
      [src]="task.imageUrl"
      [alt]="task.title"
      class="w-full h-40 object-cover"
    />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ task.title }}</h3>
      <p class="text-sm text-gray-600 mt-2">
        {{ task.description }}
      </p>
      <button
        *ngIf="!task.isCompleted"
        [ngClass]="{
          'bg-red-500': !task.isCompleted
        }"
        class="mt-4 inline-block text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        Mark as Completed
      </button>
    </div>
  </div>`,
  styles: [],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CardComponent {
  @Input() task: Task = {
    id: 0,
    title: '',
    description: '',
    imageUrl: '',
    isCompleted: false,
  };
}
