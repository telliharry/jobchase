import { TestBed, inject } from '@angular/core/testing';

import { JobchaseViewDataService } from './jobchase-view-data.service';

describe('JobchaseViewDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobchaseViewDataService]
    });
  });

  it('should be created', inject([JobchaseViewDataService], (service: JobchaseViewDataService) => {
    expect(service).toBeTruthy();
  }));
});
