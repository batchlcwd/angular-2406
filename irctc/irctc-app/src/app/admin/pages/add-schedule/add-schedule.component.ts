import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Train } from '../../../models/train';
import { TrainSchedule } from '../../../models/schedule';
import { TrainService } from '../../../services/train.service';
import { TrainScheduleService } from '../../../services/train-schedule.service';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-add-schedule',
  standalone: false,
  templateUrl: './add-schedule.component.html',
  styleUrl: './add-schedule.component.css',
})
export class AddScheduleComponent {
  form!: FormGroup;
  trains: Train[] = [];

  constructor(
    private fb: FormBuilder,
    private _train: TrainService,
    private _schedule: TrainScheduleService,
    private _toast: ToastMessageService
  ) {
    this.laodTrains();
  }
  laodTrains() {
    this._train.getTrains().subscribe((t) => (this.trains = t));
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      trainId: [null, Validators.required],
      runDate: [null, Validators.required],
      availableSeats: [null, [Validators.required, Validators.min(1)]],
    });

    // Simulated API call
  }

  onSubmit() {
    if (this.form.valid) {
      const schedule: TrainSchedule = this.form.value;
      console.log('Submitted Schedule:', schedule);
      // TODO: Send to API
      this._schedule.addSchedule(this.form.value).subscribe((response) => {
        this._toast.success('Schedule added');
        this.form.reset();
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
