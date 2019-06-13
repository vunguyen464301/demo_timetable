import { TestBed } from '@angular/core/testing';

import { ConnectAPIService } from './connect-api.service';

describe('ConnectAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectAPIService = TestBed.get(ConnectAPIService);
    expect(service).toBeTruthy();
  });
});
