import { TestBed } from '@angular/core/testing';

import { CrearserviceService } from './crearuser.service';

describe('CrearserviceService', () => {
  let service: CrearserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
