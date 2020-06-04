import { TestBed } from '@angular/core/testing';

import { EncuestaService } from './encuesta.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { Server } from 'https';

describe('EncuestaService', () => {
  let httpTestingController: HttpTestingController;
  let service: EncuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[EncuestaService]
    });

    httpTestingController = TestBed.get(HttpTestingController)
    service = TestBed.inject(EncuestaService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Formato de encuesta - Verifica si obtiene resultado el servicio (Retorna observable)', () => {
    const mockFormatoEncuesta = [{
      encuestaId:1,
      preguntas:[{
        "preguntaId":1,
        "descripcionPregunta":"coca-cola preferida",
        "respuestas":[{
          "id":1,
          "descripcion":"Light"
        },{
          "id":2,
          "descripcion":"Sin Azucar"
        }]
      }]
    }];

    service.getFormatoEncuesta(1)
      .subscribe(formatoData => {
        expect(formatoData.length).toBe(1)
        expect(formatoData[0].encuestaId).toBe(1);
        expect(formatoData[0].preguntas.length).toBe(1);
      });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/encuestas/1/formato'
    );

    req.flush(mockFormatoEncuesta);
  });

  /*it('getFormatoEncuesta deberia retornar un observable', () => {
    service.getFormatoEncuesta(1).subscribe(formato => {
      console.info(formato);
    })
  })*/
});