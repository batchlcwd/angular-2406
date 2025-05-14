import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'seach-component',
  template: `
    <div class="w-full mx-auto py-6">
      <div class="flex w-full">
        <input
          (keyup)="onKeyUp()"
          [(ngModel)]="inputText"
          type="text"
          placeholder="Search tasks..."
          class="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          (click)="searchTask()"
          type="submit"
          class="px-6 py-2 bg-gray-600 text-white font-semibold rounded-r-md hover:bg-gray-700 transition duration-300"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  `,
  styles: [],
  imports: [CommonModule, FormsModule],
})
export class SearchComponent {
  inputText: string = '';
  @Input() buttonText: string = 'Search';

  // EventEmitter to notify parent component
  @Output() searchButtonClick = new EventEmitter<string>();

  searchTask() {
    console.log('child search');

    ///kuch aisa karana hai ki parent ko pata chale ki child ne search kiya hai
    ///parent ko event emit karna hai
    // event bana ke then  emit karenge
    this.searchButtonClick.emit(this.inputText);
  }

  keyUp() {
    console.log('key up');
    // Emit the input text on keyup
    this.searchButtonClick.emit(this.inputText);
  }

  private timer: any;

  //key press
  onKeyUp() {
    this.buttonText = 'Seaching....';
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {
      //after 3 sec
      console.log('on key up after 3 sec');
      this.keyUp();
      this.buttonText = 'Search';
    }, 2000);
  }
}
