import { Component } from '@angular/core';
import { Station } from '../../../models/station';
import { FormSubmittedEvent, NgForm } from '@angular/forms';
import { StationService } from '../../../services/station.service';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-add-station',
  standalone: false,
  templateUrl: './add-station.component.html',
  styleUrl: './add-station.component.css',
})
export class AddStationComponent {
  station: Station = {
    code: '',
    name: '',
    state: '',
    city: '',
  };

  agree = false;

  constructor(
    private stationService: StationService,
    private toastService: ToastMessageService
  ) {}

  submitForm(formEvent: any) {
    formEvent.preventDefault();
    console.log(this.station);
    if (this.agree) {
      //api call
      this.stationService.addStations(this.station).subscribe({
        next: (response) => {
          this.toastService.success('Station Added!');
          this.station = {
            code: '',
            name: '',
            state: '',
            city: '',
          };
        },
        error: (error) => {
          console.log(error);
          this.toastService.error('Error in adding stations');
        },
      });
    } else {
      this.toastService.error('Select Agreement ??');
    }
  }
}
