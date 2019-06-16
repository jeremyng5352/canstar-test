import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../state/restaurant.model';

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.scss']
})
export class RestaurantTableComponent implements OnInit {
  @Input() restaurants: Array<Restaurant>;
  constructor() { }

  ngOnInit() {
  }

}
