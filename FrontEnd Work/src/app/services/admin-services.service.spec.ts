import { TestBed } from '@angular/core/testing';

import { AdminServices } from './admin-services.service';

describe('AdminServicesService', () => {
  let service: AdminServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
