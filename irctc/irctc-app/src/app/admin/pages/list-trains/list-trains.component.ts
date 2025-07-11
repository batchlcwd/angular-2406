import { Component, OnInit } from '@angular/core';
import { Train } from '../../../models/train';
import { TrainService } from '../../../services/train.service';

@Component({
  selector: 'app-list-trains',
  standalone: false,
  templateUrl: './list-trains.component.html',
  styleUrl: './list-trains.component.css',
})
export class ListTrainsComponent implements OnInit {
  trains: Train[] = [];

  constructor(
    private trainService: TrainService // Inject the TrainService to fetch data
  ) {}

  ngOnInit(): void {
    this.trainService.getTrains().subscribe({
      next: (data: Train[]) => {
        this.trains = data; // Assign the fetched trains to the component's property
        this.trains.sort((a, b) => -a.name.localeCompare(b.name));
      },
      error: (error) => {
        console.error('Error fetching trains:', error); // Handle any errors
      },
    });
  }
}
