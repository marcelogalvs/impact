import { TestBed } from '@angular/core/testing';

import { CalcadosService } from './calcados.service';

describe('CalcadosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalcadosService = TestBed.get(CalcadosService);
    expect(service).toBeTruthy();
  });
});
