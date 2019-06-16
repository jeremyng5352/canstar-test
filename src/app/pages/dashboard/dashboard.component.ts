import { Component, OnInit } from '@angular/core';
import { rawRestaurantDatas } from '../../data/restaurant';
import { RestaurantService } from '../../state/restaurant.service';
import { Restaurant } from 'src/app/state';
import { Observable } from 'rxjs';
import { RestaurantQuery } from '../../state/restaurant.query';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentView: 'Table' | 'Grid';
  selectedCuisineType: string;
  restaurants$: Observable<Array<Restaurant>>;

  constructor(
    private restaurantService: RestaurantService,
    private restaurantQuery: RestaurantQuery
  ) {
    this.currentView = 'Grid';
  }

  ngOnInit() {
    this.restaurantService.getRestaurants();
    this.restaurants$ = this.restaurantQuery.selectAll();
  }

}
