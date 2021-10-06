import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WeatherForecastComponent} from "./components/weather-forecast/weather-forecast.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {
    path: "forecast/:zip",
    component: WeatherForecastComponent
  },
  {
    path: "**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
