import { Component } from '@angular/core';
import { Station, StationsResponse } from '../../../models/station';
import { StationService } from '../../../services/station.service';
import { ConfirmMessageService } from '../../../services/confirm-message.service';
import { take } from 'rxjs';
import { ToastMessageService } from '../../../services/toast-message.service';

@Component({
  selector: 'app-list-stations',
  standalone: false,
  templateUrl: './list-stations.component.html',
  styleUrl: './list-stations.component.css',
})
export class ListStationsComponent {
  //non-null assertion operator
  stationResponse!: StationsResponse<Station>;

  constructor(
    private stationService: StationService,
    private confirmMsgService: ConfirmMessageService,
    private toastMsgService: ToastMessageService
  ) {
    this.loadData(0, 50);
  }

  pageChange(event: any) {
    console.log(event);
    let pageNumber = event.first / event.rows;
    console.log(pageNumber);

    this.loadData(pageNumber, 50);

    // this.stationService
    //   .getStations(pageNumber, 1)
    //   .subscribe((response) => (this.stationResponse = response));
    // this.stationService.getStations(page=)
  }

  private loadData(page: number, size: number) {
    this.stationService.getStations(page, size).subscribe({
      next: (stationResponse) => {
        this.stationResponse = stationResponse;
        console.log(this.stationResponse);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  onDelete(station: Station) {
    this.confirmMsgService
      .show('Are you sure you want to delete service?', 'Confirm', 'Delete')
      .subscribe((value) => {
        if (value) {
          if (station.id) {
            this.stationService
              .deleteStation(station.id)
              .subscribe((response) => {
                const stationList = this.stationResponse.content.filter(
                  (st) => st.id != station.id
                );
                this.stationResponse.content = [...stationList];
                this.toastMsgService.success('Station Deleted !!');
              });
          }
        } else {
          console.log('reject');
        }
      });
  }
}
