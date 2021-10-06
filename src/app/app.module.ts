import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ZipFormComponent } from './components/zip-form/zip-form.component';
import { WeatherCurrentComponent } from './components/weather-current/weather-current.component';
import {HttpClientModule} from "@angular/common/http";
import { WeatherImageComponent } from './components/weather-image/weather-image.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, AppRoutingModule],
  declarations: [ AppComponent, ZipFormComponent, WeatherCurrentComponent, WeatherImageComponent, WeatherForecastComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
