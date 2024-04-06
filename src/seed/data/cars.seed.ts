import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Yaris',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'RAV4',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Land Cruiser',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Camry',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Supra',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: '86',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Sienna',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Tacoma',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Tundra',
  },
  {
    id: uuid(),
    brand: 'Toyota',
    model: '4Runner',
  },
];
