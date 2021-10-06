import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {WeatherCurrentResponse, WeatherService} from "../../services/weather.service";
import {tap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css']
})
export class WeatherCurrentComponent implements OnInit {

  @Input()
  public zip: number = -1;

  @Input()
  public index: number = -1;

  @Output()
  public removeZipAtIndex = new EventEmitter<number>();

  public weather$: Observable<WeatherCurrentResponse> = of();

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.getWeatherCurrent(this.zip).pipe(
      tap(resp => {
        console.log(resp);
      })
    );
    }

  public removeZip() {
      this.removeZipAtIndex.emit(this.index);
  }

}
