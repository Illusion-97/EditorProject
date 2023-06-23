import { TestBed } from '@angular/core/testing';

import { IsRedactorGuard } from './is-redactor.guard';

describe('IsRedactorGuard', () => {
  let guard: IsRedactorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsRedactorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
