export interface TrainSchedule {
  id?: number;
  trainId: number;
  runDate: string; // or use `Date` if you plan to parse it
  availableSeats: number;
}
