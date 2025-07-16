import { TestBed } from '@angular/core/testing';

import { ConfirmMessageService } from './confirm-message.service';

describe('ConfirmMessageService', () => {
  let service: ConfirmMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
