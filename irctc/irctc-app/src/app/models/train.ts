import { Station } from './station';

export interface Train {
  id?: number;
  number: string;
  name: string;
  sourceStation: Station;
  destinationStation: Station;
  totalDistance: number;
}
