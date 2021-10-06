import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface WeatherForecastResponse {
  city: {
    name: string
    timezone: number,
  },
  list: Array<{
    dt: number,
    temp: {
      min: number,
      max: number,
    },
    weather: Array<{
      main: string,
      icon: string,
    }>
  }>
}

export interface WeatherCurrentResponse {
  name: string;
  main: {
    temp: number,
    temp_min: number,
    temp_max: number,
  },
  weather: Array<{
    main: string,
    icon: string
  }>
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private static readonly BASE_URL ="https://api.openweathermap.org/data/2.5/";
  private static readonly APP_ID ="5a4b2d457ecbef9eb2a71e480b947604";
  private static readonly UNITS ="metric";
  private static readonly FORECAST_COUNT = 5;

  constructor(private http: HttpClient) { }

  public getWeatherCurrent(zip: number): Observable<WeatherCurrentResponse> {
    return this.http.get<WeatherCurrentResponse>(
      `${WeatherService.BASE_URL}weather?zip=${zip}&units=${WeatherService.UNITS}&appid=${WeatherService.APP_ID}`
    );
  }

  public getWeatherForecast(zip: number | string): Observable<WeatherForecastResponse> {
    return this.http.get<WeatherForecastResponse>(
      `${WeatherService.BASE_URL}forecast/daily?zip=${zip}&units=${WeatherService.UNITS}&cnt=${WeatherService.FORECAST_COUNT}&appid=${WeatherService.APP_ID}`
    );
  }

}
