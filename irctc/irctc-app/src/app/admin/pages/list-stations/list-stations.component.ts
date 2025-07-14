import { Component } from '@angular/core';
import { Station, StationsResponse } from '../../../models/station';
import { StationService } from '../../../services/station.service';

@Component({
  selector: 'app-list-stations',
  standalone: false,
  templateUrl: './list-stations.component.html',
  styleUrl: './list-stations.component.css',
})
export class ListStationsComponent {
  //non-null assertion operator
  stationResponse!: StationsResponse<Station>;

  constructor(private stationService: StationService) {
    this.stationService.getStations().subscribe({
      next: (stationResponse) => {
        this.stationResponse = stationResponse;
        console.log(this.stationResponse);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  pageChange(event: any) {
    console.log(event);
    // this.stationService.getStations(page=)
  }
}
