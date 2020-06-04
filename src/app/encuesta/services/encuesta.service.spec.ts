import { TestBed } from '@angular/core/testing';

import { EncuestaService } from './encuesta.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('EncuestaService', () => {
  let service: EncuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[EncuestaService]
    });
    service = TestBed.inject(EncuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
