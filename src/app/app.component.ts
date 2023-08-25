import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { HousingService } from './housing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';
  selectedLocation: HousingLocation | undefined;
  housingLocationList: HousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
