import { TestBed } from '@angular/core/testing';

import { PaymentcalculationService } from './paymentcalculation.service';

describe('PaymentcalculationService', () => {
  let service: PaymentcalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentcalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
