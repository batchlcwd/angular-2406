import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme == 'dark') {
      document.documentElement.classList.add('app-dark');
    }
  }

  title = 'irctc-app';
}
