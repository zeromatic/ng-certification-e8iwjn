import { Injectable } from '@angular/core';

export interface StoredZips {
  zips: Array<number>
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private static readonly STORAGE_KEY_ZIP_CODES = "ZIP_CODES";

  constructor() { }

  public saveZip(zip: number): number[] {
    let zips = this.getZips();
    zips.unshift(zip);

    let storedZips: StoredZips = {
      zips: zips
    };

    try {
      localStorage.setItem(LocalStorageService.STORAGE_KEY_ZIP_CODES,JSON.stringify(
        storedZips
      ));
    } catch (e) {
      console.error("Unable to save zip in local storage",e,zip)
    }

    return zips;
  }

  public removeZipAtIndex(index: number): number[] {
    let zips = this.getZips();
    zips.splice(index,1);

    let storedZips: StoredZips = {
      zips: zips
    };

    try {
      localStorage.setItem(LocalStorageService.STORAGE_KEY_ZIP_CODES,JSON.stringify(
        storedZips
      ));
    } catch (e) {
      console.error("Unable remove zip at given index in local storage",e,index);
    }

    return zips;
  }


  public getZips(): number[] {
    let zipsRaw = localStorage.getItem(LocalStorageService.STORAGE_KEY_ZIP_CODES);
    if (zipsRaw) {
      try {
        let storedZips: StoredZips = JSON.parse(zipsRaw) as StoredZips;
        return storedZips.zips;
      } catch (e) {
        console.error("Unable to parse stored zips", e, zipsRaw);
        return [];
      }
    } else {
      return [];
    }
  }
}
