import { Component, OnInit } from '@angular/core';
import { Train } from '../../../models/train';
import { TrainService } from '../../../services/train.service';
import { ToastMessageService } from '../../../services/toast-message.service';
import { ConfirmMessageService } from '../../../services/confirm-message.service';

@Component({
  selector: 'app-list-trains',
  standalone: false,
  templateUrl: './list-trains.component.html',
  styleUrl: './list-trains.component.css',
})
export class ListTrainsComponent implements OnInit {
  //for trains list
  trains: Train[] = [];

  //for show/hide modal
  showUpdateModal = false;

  //for tain to update
  trainToUpdate!: Train;

  constructor(
    private trainService: TrainService, // Inject the TrainService to fetch data,
    private _toast: ToastMessageService,
    private _confimService: ConfirmMessageService
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

  showUpdateModalClicked(train: Train) {
    this.showUpdateModal = true;
    this.trainToUpdate = train;
  }

  handleDeleteTrain(train: Train) {
    this._confimService
      .show('Are you sure want to delete train ?', 'Confirm', 'Delete')
      .subscribe((data) => {
        if (data) {
          if (train.id) {
            this.trainService.deleteTrain(train.id).subscribe((response) => {
              this._toast.success('train deleted');
              this.trains = this.trains.filter(
                (trainL) => trainL.id != train.id
              );
            });
          }
        }
      });
  }
}
