import { Component } from '@angular/core';
import { StationService } from '../../../services/station.service';
import { Station } from '../../../models/station';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-book-ticket',
  standalone: false,
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css',
})
export class BookTicketComponent {
  stations: Station[] = [];

  bookingData: {
    sourceStation: Station | null;
    destinationStation: Station | null;
    selectedDate: string;
  } = {
    sourceStation: null,
    destinationStation: null,
    selectedDate: '',
  };
  searchedTrains!: any[];

  constructor(
    private stationService: StationService,
    private userService: UserService
  ) {
    this.stationService.getStations().subscribe((stationResponse) => {
      console.log(stationResponse);
      this.stations = stationResponse.content;
    });
  }
  formSubmitted(event: any) {
    event.preventDefault();
    console.log(this.bookingData);

    const searchRequestData = {
      sourceStationId: this.bookingData.sourceStation?.id,
      destinationStationId: this.bookingData.destinationStation?.id,
      journeyDate: this.bookingData.selectedDate,
    };

    this.userService
      .searchTrain(searchRequestData)
      .subscribe((response: any) => {
        console.log(response);
        this.searchedTrains = response;
      });
  }

  getPriceByKey(key: any, object: any) {
    return object[key];
  }
}
