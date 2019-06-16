import { QueryEntity } from '@datorama/akita';
import { RestaurantStore, RestaurantState } from './restaurant.store';
import { Restaurant } from './restaurant.model';

export class RestaurantQuery extends QueryEntity<RestaurantState, Restaurant> {

  constructor(protected store: RestaurantStore) {
    super(store);
  }

}

