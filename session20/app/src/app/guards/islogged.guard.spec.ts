import { TestBed } from '@angular/core/testing';

import { IsloggedGuard } from './islogged.guard';

describe('IsloggedGuard', () => {
  let guard: IsloggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsloggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
