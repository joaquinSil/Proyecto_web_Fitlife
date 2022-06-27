import { TestBed } from '@angular/core/testing';

import { PuenteEntreComponentesService } from './puente-entre-componentes.service';

describe('PuenteEntreComponentesService', () => {
  let service: PuenteEntreComponentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PuenteEntreComponentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
