import { TestBed } from '@angular/core/testing';

import { PaymentController } from './payment.controller';

describe('PaymentController', () => {
  let service: PaymentController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
