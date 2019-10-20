import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nasa-data',
  templateUrl: './nasa-data.component.html'
})

export class NasaDataComponent {
  public forecasts: WeatherForecast[];

  constructor(http: HttpClient) {
    http.get<any[]>('https://images-api.nasa.gov//search?q=water').subscribe(result => {
      console.log(result);
      // result.collection.items.forEach(function(item) {
      //   item.links.forEach(function(link) {
      //     console.log(link);
      //   });
      // });
    }, error => console.error(error));
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
