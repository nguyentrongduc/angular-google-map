import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly storageKey = 'listLocation';
  private apiKey = 'AIzaSyDnpHvEPrzp1XwaWKkm8XbWakKVWwQdIi8';
  private apiUrl =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json';

  constructor() {}

  keyExists(): boolean {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData !== null;
  }

  getData(): any[] {
    const storedData = localStorage.getItem(this.storageKey);
    return storedData ? JSON.parse(storedData) : [];
  }

  setData(data: any[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  updateObject(updatedObject: any): void {
    let currentData = this.getData();
    currentData.push(updatedObject);
    this.setData(currentData);
  }

  updateStatus(updatedObject: any): void {
    let currentData = this.getData();
    currentData.find((value) => {
      if (value.lat === updatedObject.lat && value.lng === updatedObject.lng) {
        value.status = updatedObject.status;
      }
    });
    this.setData(currentData);
  }
}
