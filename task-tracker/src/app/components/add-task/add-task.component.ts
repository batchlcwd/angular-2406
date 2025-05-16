import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddTaskComponentComponent } from "../add-task-component/add-task-component.component";

@Component({
  selector: 'app-add-task',
  imports: [SearchComponent, FormsModule, CommonModule, AddTaskComponentComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  addTask(_t6: NgForm) {
    console.log(_t6.value);
    // this._t6.resetForm();
  }
}
