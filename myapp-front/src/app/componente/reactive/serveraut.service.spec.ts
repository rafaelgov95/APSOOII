import { TestBed, inject } from '@angular/core/testing';

import { ServerautService } from './serveraut.service';

describe('ServerautService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerautService]
    });
  });

  it('should be created', inject([ServerautService], (service: ServerautService) => {
    expect(service).toBeTruthy();
  }));
});
