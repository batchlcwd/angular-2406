import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";

@Component({
  selector: 'app-add-task',
  imports: [SearchComponent],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

}
