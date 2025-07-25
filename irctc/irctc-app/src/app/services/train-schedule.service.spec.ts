import { TestBed } from '@angular/core/testing';

import { TrainScheduleService } from './train-schedule.service';

describe('TrainScheduleService', () => {
  let service: TrainScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
