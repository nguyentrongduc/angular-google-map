import { MapsAPILoader } from '@agm/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-user-select-location',
  templateUrl: './user-select-location.component.html',
  styleUrls: ['./user-select-location.component.scss'],
})
export class UserSelectLocationComponent implements OnInit {
  selectedLat: number = 0;
  selectedLng: number = 0;
  locationSelected = false;
  storedData: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getLocation();
    this.storedData = this.dataService.getData();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.selectedLat = position.coords.latitude;
          this.selectedLng = position.coords.longitude;
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default to a fallback location if the user denies location access
          this.selectedLat = 37.7749;
          this.selectedLng = -122.4194;
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Default to a fallback location if geolocation is not supported
      this.selectedLat = 37.7749;
      this.selectedLng = -122.4194;
    }
  }

  onMapClick(event: any) {
    this.selectedLat = event.coords.lat;
    this.selectedLng = event.coords.lng;
    this.locationSelected = true;
  }

  saveLocation() {
    const param = {
      lat: this.selectedLat,
      lng: this.selectedLng,
      status: 'pending',
    };
    if (!this.dataService.keyExists()) {
      this.dataService.setData([]);
    } else {
      const exists = this.storedData.some(
        (obj) => obj.lat === this.selectedLat && obj.lng === this.selectedLng
      );
      if (!exists) {
        this.dataService.updateObject(param);
      }
    }
  }
}
