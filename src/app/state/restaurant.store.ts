import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Restaurant } from './restaurant.model';

export interface RestaurantState extends EntityState<Restaurant> {}

@StoreConfig({ name: 'restaurant' })
export class RestaurantStore extends EntityStore<RestaurantState, Restaurant> {

  constructor() {
    super();
  }

}

