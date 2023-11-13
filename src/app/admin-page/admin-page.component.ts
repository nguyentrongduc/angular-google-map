import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  listLocation: any[] = [];
  places: any[] = [];
  panelOpenState = false;

  constructor(
    private dataService: DataService,
    private mapsAPILoader: MapsAPILoader
  ) {}

  ngOnInit(): void {
    this.listLocation = this.dataService.getData();
  }

  findNearbyPlaces(lat: number, lng: number) {
    this.mapsAPILoader.load().then(() => {
      const service = new google.maps.places.PlacesService(
        document.createElement('div')
      );

      const request = {
        location: { lat: lat, lng: lng },
        radius: 20000, // 5 kilometers
        types: ['hospital', 'school', 'park', 'supermarket'],
      };

      service.nearbySearch(request, (results: any[], status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.places = results;
          console.log('Nearby Places:', results);
        } else {
          console.error('Error fetching nearby places:', status);
        }
      });
    });
  }

  action(lat: number, lng: number, action: string) {
    this.listLocation.forEach((value) => {
      if (value.lat === lat && value.lng === lng) {
        value.status = action;
        this.dataService.updateStatus(value);
      }
    });
    this.listLocation = this.dataService.getData();
    console.log(this.listLocation);
  }
}
