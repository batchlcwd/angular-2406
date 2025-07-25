import { Component } from '@angular/core';
import { Train } from '../../../models/train';
import { TrainService } from '../../../services/train.service';
import { TrainScheduleService } from '../../../services/train-schedule.service';
import { TrainSchedule } from '../../../models/schedule';
import { UtilService } from '../../../services/util.service';
import { ConfirmMessageService } from '../../../services/confirm-message.service';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-list-schedule',
  standalone: false,
  templateUrl: './list-schedule.component.html',
  styleUrl: './list-schedule.component.css',
})
export class ListScheduleComponent {
  trains!: Train[];
  selectedTrain!: Train;
  schedules!: TrainSchedule[];
  constructor(
    private _train: TrainService,
    private _schedule: TrainScheduleService,
    public _util: UtilService,
    private _confirm: ConfirmMessageService,
    private _toast: ToastMessageService
  ) {
    this.loadTrains();
  }
  loadTrains() {
    this._train.getTrains().subscribe((trai) => (this.trains = trai));
  }

  handleChange() {
    if (this.selectedTrain) {
      if (this.selectedTrain.id) {
        this._schedule
          .getTrainSchedules(this.selectedTrain.id)
          .subscribe(
            (response) =>
              (this.schedules = response.sort(
                (i1, i2) => -i1.runDate.localeCompare(i2.runDate)
              ))
          );
      }
    }
  }

  handleDelete(_t29: TrainSchedule) {
    this._confirm
      .show('Are you sure want to delete train schedule?', 'Confim', 'Delete')
      .subscribe((data) => {
        if (data) {
          if (_t29.id) {
            this._schedule.delete(_t29.id).subscribe((response) => {
              this.schedules = this.schedules.filter((s1) => s1.id != _t29.id);
              this._toast.success('Schedule Deleted');
            });
          }
        }
      });
  }
}
