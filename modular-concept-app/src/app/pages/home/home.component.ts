import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[ApiService]
})
export class HomeComponent {
  //inject:

  user: any;

  constructor(private apiService: ApiService) {
    this.user = apiService.getUser();
    console.log(this.user);
  }
}
