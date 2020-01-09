import { TestBed } from '@angular/core/testing';

import { WelcomeDataServiceService } from './welcome-data-service.service';

describe('WelcomeDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WelcomeDataServiceService = TestBed.get(WelcomeDataServiceService);
    expect(service).toBeTruthy();
  });
});
