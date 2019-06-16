import { Component, OnInit } from '@angular/core';
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
  isBannerShown: boolean;
  currentFilter: 'Asian' | 'American' | 'Pizza' | 'Mexican' | 'None';
  currentView: 'Table' | 'Grid';
  selectedCuisineType: string;
  restaurants$: Observable<Array<Restaurant>>;

  constructor(
    private restaurantService: RestaurantService,
    private restaurantQuery: RestaurantQuery
  ) {
    this.isBannerShown = true;
    this.currentView = 'Table';
    this.currentFilter = 'None';
  }

  ngOnInit() {
    this.restaurantService.getRestaurants();
    this.getRestaurants();
  }

  getRestaurants() {
    if (this.currentFilter === 'None') {
      this.restaurants$ = this.restaurantQuery.selectAll();
    } else {
      this.restaurants$ = this.restaurantQuery.selectAll({
        filterBy: entity => entity.cuisine_type === this.currentFilter
      });
    }
  }

}
