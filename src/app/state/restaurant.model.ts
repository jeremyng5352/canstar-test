import { ID } from '@datorama/akita';

export interface Restaurant {
  id: ID;
  name: string;
  neighborhood: string;
  address: string;
  latlng: {
    lat: string;
    long: string;
  };
  cuisine_type: 'Asian' | 'American' | 'Pizza' | 'Mexican';
}

export function createRestaurant(params: Partial<Restaurant>) {
  return {
    id: params.id,
    name: params.name,
    neighborhood: params.neighborhood,
    address: params.address,
    latlng: params.latlng,
    cuisine_type: params.cuisine_type
  } as Restaurant;
}
