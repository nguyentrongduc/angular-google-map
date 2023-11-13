import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-location-selected',
  templateUrl: './list-location-selected.component.html',
  styleUrls: ['./list-location-selected.component.scss'],
})
export class ListLocationSelectedComponent implements OnInit {
  listLocation: any[] = [];
  panelOpenState = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.listLocation = this.dataService.getData();
  }
}
