import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public zips: number[] = [];

  constructor(private localStorageService: LocalStorageService) {

  }

  ngOnInit(): void {
    this.zips = this.localStorageService.getZips();
  }

  public addZipAndUpdateView(zip: number): void {
    this.zips = this.localStorageService.saveZip(zip);
  }

  public removeZipAndUpdateView(index: number): void {
    this.zips = this.localStorageService.removeZipAtIndex(index);
  }

}
