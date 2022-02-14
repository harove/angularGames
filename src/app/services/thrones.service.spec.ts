import { TestBed } from '@angular/core/testing';

import { ThronesService } from './thrones.service';

describe('ThronesService', () => {
  let service: ThronesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThronesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
