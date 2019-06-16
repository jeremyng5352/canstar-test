import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';

export interface RestaurantState extends EntityState<Restaurant> {}

@StoreConfig({ name: 'restaurant' })
@Injectable({ providedIn: 'root' })
export class RestaurantStore extends EntityStore<RestaurantState, Restaurant> {

  constructor() {
    super();
  }

}

