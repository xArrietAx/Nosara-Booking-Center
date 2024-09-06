import { houses, house } from "./tables/houses";
import { tours, tour } from "./tables/tours";
import { cache } from 'react';

const getHouses = cache(houses)
const getHouse = cache(house)

const getTours = cache(tours)
const getTour = cache(tour)

export {
    getTours, getHouses, getHouse, getTour
}