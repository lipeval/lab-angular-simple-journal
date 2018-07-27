import { TestBed, inject } from '@angular/core/testing';

import { RetrieveEntriesService } from './retrieve-entries.service';

describe('RetrieveEntriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveEntriesService]
    });
  });

  it('should be created', inject([RetrieveEntriesService], (service: RetrieveEntriesService) => {
    expect(service).toBeTruthy();
  }));
});
