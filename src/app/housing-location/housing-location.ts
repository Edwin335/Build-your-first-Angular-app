import { Component, Input} from '@angular/core';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <p>
      {{ housingLocation?.name }}
    </p>
  `,
  styles: ``
})

export class HousingLocation {
    @Input() housingLocation?: HousingLocationInfo;
}
