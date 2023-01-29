import { TestBed } from '@angular/core/testing';

import { DonorService } from './Donor.service';

describe('ServiceService', () => {
  let service: DonorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
