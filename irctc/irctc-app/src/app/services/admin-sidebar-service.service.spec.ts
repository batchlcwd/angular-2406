import { TestBed } from '@angular/core/testing';

import { AdminSidebarServiceService } from './admin-sidebar-service.service';

describe('AdminSidebarServiceService', () => {
  let service: AdminSidebarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminSidebarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
