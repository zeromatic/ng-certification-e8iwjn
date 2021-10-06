import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.css']
})
export class WeatherImageComponent {

  @Input()
  public icon: string | undefined = "";

  @Input()
  public customClass: string = "";

  constructor() { }

}
