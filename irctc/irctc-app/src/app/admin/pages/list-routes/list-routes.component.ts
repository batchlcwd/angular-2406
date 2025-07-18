import { Component } from '@angular/core';

@Component({
  selector: 'app-list-routes',
  standalone: false,
  templateUrl: './list-routes.component.html',
  styleUrl: './list-routes.component.css',
})
export class ListRoutesComponent {
  handleClick(event: MouseEvent) {
    console.log('button clicked in list route component');
    console.log(event.target);
  }
}
