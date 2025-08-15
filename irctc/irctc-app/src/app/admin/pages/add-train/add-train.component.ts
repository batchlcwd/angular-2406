import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Station } from '../../../models/station';
import { StationService } from '../../../services/station.service';
import { TrainService } from '../../../services/train.service';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-add-train',
  standalone: false,
  templateUrl: './add-train.component.html',
  styleUrl: './add-train.component.css',
})
export class AddTrainComponent {
  trainForm!: FormGroup;
  stations: Station[] = [];

  constructor(
    private fb: FormBuilder,
    private stationService: StationService,
    private trainService: TrainService,
    private _toast: ToastMessageService
  ) {
    // stations load

    this.stationService.getStations().subscribe({
      next: (stations) => {
        console.log(stations);
        this.stations = stations.content;
      },
      error: (error) => {
        console.log(error);
      },
    });

    this.trainForm = this.fb.group({
      number: ['', Validators.required],
      name: ['', Validators.required],
      sourceStation: [null, Validators.required],
      destinationStation: [null, Validators.required],
      totalDistance: [null, [Validators.required, Validators.min(1)]],
    });
  }
  onSubmit() {
    if (this.trainForm.valid) {
      console.log('Form Data:', this.trainForm.value);
      // submit on server
      this.trainService.addTrain(this.trainForm.value).subscribe({
        next: (train) => {
          console.log('Train added');
          this._toast.success('Train added Successfully..');
          this.trainForm.reset();
        },
        error: (error) => {
          console.log('error occured' + error);
        },
      });
    } else {
      console.log(this.trainForm);
    }
  }
}
