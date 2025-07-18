import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
    this.addRouteForm = this.fb.group({
      stationOrder: ['', [Validators.required, Validators.min(0)]],
      arrivalTime: ['', [Validators.required]],
      departureTime: ['', [Validators.required]],
      haltMinutes: ['', [Validators.required, Validators.min(0)]],
      distanceFromSource: ['', [Validators.required, Validators.min(8)]],
    });
  }

  onSubmit() {
    if (this.addRouteForm.valid) {
      console.log(this.addRouteForm.value);
    } else {
      this.addRouteForm.markAllAsTouched();
      console.log('form is invalid');
    }
  }
}
