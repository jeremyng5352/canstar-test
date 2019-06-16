import { RestaurantStore } from './restaurant.store';
import { Restaurant, createRestaurant } from './restaurant.model';

export class RestaurantService {

  constructor(private restaurantStore: RestaurantStore) {
  }

  createRestaurant(params: Partial<Restaurant>): Restaurant {
    const restaurant = createRestaurant(params);
    this.restaurantStore.add(restaurant);
    return restaurant;
  }

}
