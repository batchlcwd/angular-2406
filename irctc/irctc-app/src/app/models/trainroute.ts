import { Station } from './station';
import { Train } from './train';

export interface TrainRoute {
  id?: number;
  train: Train;
  station: Station;
  stationOrder: number;
  arrivalTime: string;
  departureTime: string;
  haltMinutes: number;
  distanceFromSource: number;
}
