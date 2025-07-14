import { Component } from '@angular/core';
import { Station } from '../../../models/station';
import { FormSubmittedEvent, NgForm } from '@angular/forms';
import { StationService } from '../../../services/station.service';

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

  constructor(private stationService: StationService) {}

  submitForm(formEvent: any) {
    formEvent.preventDefault();
    console.log(this.station);
    if (this.agree) {
      //api call
      this.stationService.addStations(this.station).subscribe({
        next: (response) => {
          alert('station added');
          this.station = {
            code: '',
            name: '',
            state: '',
            city: '',
          };
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log('agree the terms');
    }
  }
}
