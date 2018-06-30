import { TestBed, inject } from '@angular/core/testing';

import { RequestDemoService } from './request-demo.service';

describe('RequestDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestDemoService]
    });
  });

  it('should be created', inject([RequestDemoService], (service: RequestDemoService) => {
    expect(service).toBeTruthy();
  }));
});
