import { TestBed } from '@angular/core/testing';

import { PilulierService } from './pilulier.service';

describe('PilulierService', () => {
  let service: PilulierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PilulierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
