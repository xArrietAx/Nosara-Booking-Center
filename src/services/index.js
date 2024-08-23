import { cache } from 'react';

import { houses, house } from "./tables/houses";
import { tours, tour } from "./tables/tours";

const getHouses = cache(houses)
const getHouse = cache(house)

const getTours = cache(tours)
const getTour = cache(tour)

export {
    getTours, getHouses, getHouse, getTour
}