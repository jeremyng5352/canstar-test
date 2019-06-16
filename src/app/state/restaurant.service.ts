import { RestaurantStore } from './restaurant.store';
import { Restaurant, createRestaurant } from './restaurant.model';
import { rawRestaurantDatas } from '../data/restaurant';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RestaurantService {

  constructor(private restaurantStore: RestaurantStore) {
  }

  /**
   * This is suppose to call an api to fetch the data, but as this is a demonstration, the data fetching will be skipped
   */
  getRestaurants() {
    for (const rawRestaurantData of rawRestaurantDatas) {
      this.createRestaurant(rawRestaurantData);
    }
  }

  createRestaurant(params: Partial<Restaurant>): Restaurant {
    const restaurant = createRestaurant(params);
    this.restaurantStore.add(restaurant);
    return restaurant;
  }

}
