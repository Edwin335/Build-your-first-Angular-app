import { Component, inject} from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
import {HousingLocationInfo} from '../housinglocation';
import { CommonModule } from '@angular/common';
import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.css'],
  imports: [HousingLocation, CommonModule],
  template: `
        <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      @for(housingLocation of housingLocationList; track $index) {
        <app-housing-location [housingLocation]="housingLocation"></app-housing-location>
      }
    </section>

  `,
  styles: ``
})
export class Home {housingLocationList: HousingLocationInfo[] = [];
  housingService: Housing= inject(Housing);
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}

