import { Component } from '@angular/core';
import { Train } from '../../../models/train';
import { TrainService } from '../../../services/train.service';
import { TrainRouteService } from '../../../services/train-route.service';
import { TrainRoute } from '../../../models/trainroute';
import { ConfirmMessageService } from '../../../services/confirm-message.service';

@Component({
  selector: 'app-list-routes',
  standalone: false,
  templateUrl: './list-routes.component.html',
  styleUrl: './list-routes.component.css',
})
export class ListRoutesComponent {
  trains!: Train[];
  selectedTrain!: Train;
  trainRoute!: TrainRoute[];

  constructor(
    private _train: TrainService,
    private _trainRoute: TrainRouteService,
    private _confrm: ConfirmMessageService
  ) {
    this._train.getTrains().subscribe((response) => (this.trains = response));
  }
  handleTrainSelect() {
    console.log(this.selectedTrain);
    if (this.selectedTrain) {
      if (this.selectedTrain.id) {
        this._trainRoute.getRouteOfTrain(this.selectedTrain.id).subscribe({
          next: (repsonse) =>
            (this.trainRoute = repsonse.sort(
              (r1, r2) => r1.stationOrder - r2.stationOrder
            )),
          error: (error) => console.log(error),
        });
      }
    }
  }

  handleClick(event: MouseEvent) {
    console.log('button clicked in list route component');
    console.log(event.target);
  }

  handleDelete() {
    this._confrm.show('Are you sure want to delete Route ?');
  }
}
