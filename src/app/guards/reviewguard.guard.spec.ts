import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { reviewguardGuard } from './reviewguard.guard';

describe('reviewguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => reviewguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
