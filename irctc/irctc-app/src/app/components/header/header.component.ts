import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  //local state
  title = 'header title';
  titles = ['title1', 'title2', 'title3'];
  subtitle = signal('header subtitle');
}
