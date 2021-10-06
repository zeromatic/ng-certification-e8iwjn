import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {WeatherForecastResponse, WeatherService} from "../../services/weather.service";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {

  public zip: string = "";

  public forecast$: Observable<WeatherForecastResponse> = of();

  constructor(private router: Router,
              private route: ActivatedRoute,
              private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
        this.zip = params["zip"];
        console.log(this.zip);
        this.forecast$ = this.weatherService.getWeatherForecast(this.zip).pipe(
          tap(resp => {
            console.log(resp);
          })
        );
      }
    )
  }

  public goHome() {
    this.router.navigate([""]);
  }
}
