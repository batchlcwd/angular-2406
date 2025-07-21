import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Train } from '../../../models/train';
import { TrainService } from '../../../services/train.service';
import { StationService } from '../../../services/station.service';
import { Station } from '../../../models/station';
import { ToastMessageService } from '../../../services/toast-message.service';
import { TrainRouteService } from '../../../services/train-route.service';

@Component({
  selector: 'app-add-route',
  standalone: false,
  templateUrl: './add-route.component.html',
  styleUrl: './add-route.component.css',
})
export class AddRouteComponent {
  // FormControl--> single input field

  //  FormGroup--> group of form control

  // <form > </form >

  // FormArray : array of form controllers

  addRouteForm!: FormGroup;

  allTrains!: Train[];

  allStations!: Station[];

  constructor(
    private fb: FormBuilder,
    private _train: TrainService,
    private _station: StationService,
    private _toast: ToastMessageService,
    private _trainRoute: TrainRouteService
  ) {
    this.loadTrains();

    this.loadStations();

    this.addRouteForm = this.fb.group({
      stationOrder: ['', [Validators.required, Validators.min(0)]],
      station: ['', [Validators.required]],
      train: ['', [Validators.required]],
      arrivalTime: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      haltMinutes: ['', [Validators.required, Validators.min(0)]],
      distanceFromSource: ['', [Validators.required, Validators.min(8)]],
    });
  }
  loadTrains() {
    this._train
      .getTrains()
      .subscribe((response) => (this.allTrains = response));
  }
  loadStations() {
    this._station
      .getStations(0, 999999)
      .subscribe((response) => (this.allStations = response.content));
  }

  onSubmit() {
    if (this.addRouteForm.valid) {
      console.log(this.addRouteForm.value);
      this._trainRoute.addRoute(this.addRouteForm.value).subscribe({
        next: (reponse) => {
          this._toast.success('Train route added..');
          this.addRouteForm.reset();
        },
        error: (error) => {
          console.log(error);
          this._toast.error('Error in adding route.');
        },
      });
    } else {
      this.addRouteForm.markAllAsTouched();
      console.log('form is invalid');
      this._toast.error('Check the detail of the form !');
    }
  }
}
