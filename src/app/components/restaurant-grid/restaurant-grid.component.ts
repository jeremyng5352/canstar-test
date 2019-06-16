import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../state/restaurant.model';

@Component({
  selector: 'app-restaurant-grid',
  templateUrl: './restaurant-grid.component.html',
  styleUrls: ['./restaurant-grid.component.scss']
})
export class RestaurantGridComponent implements OnInit {
  @Input() restaurants: Array<Restaurant>;
  constructor() { }

  ngOnInit() {
  }

}
