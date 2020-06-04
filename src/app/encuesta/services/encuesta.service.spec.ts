import { TestBed } from '@angular/core/testing';

import { EncuestaService } from './encuesta.service';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
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
    expect(req.request.method).toEqual('GET');
    req.flush(mockFormatoEncuesta);
  });

  it('Guardar encuesta - Verifica que la petición ha sido satisfactoria', () => {
    const inputData:any = {
      idEncuesta: 1,
      email: 'mock@email.com',
      respuestas: [{
        idPregunta: 1,
        valorRespuesta: 2
      }]
    };

    service.saveEncuesta(inputData).subscribe(result => {})

    // addEmploye should have made one request to POST employee
    const req = httpTestingController.expectOne('http://localhost:8080/encuestas/');
    expect(req.request.method).toEqual('POST');
    req.flush({});
  });


  it('Guardar encuesta fallida - Verifica', () => {
    const mockErrorResponse = { status: 400, statusText: 'Bad Request' };
    const data = 'Invalid request parameters';
    let response: any;
    let errResponse: any;

    service.saveEncuesta({}).subscribe(res => response = res, err => errResponse = err)

    const req = httpTestingController.expectOne('http://localhost:8080/encuestas/');
    expect(req.request.method).toEqual('POST');
    req.flush(data, mockErrorResponse);
    expect(errResponse.error).toBe('Invalid request parameters');
  });

  
  
  it('Formato de encuesta - Verifica si obtiene resultado el servicio (Retorna observable)', () => {
    const idEncuesta = 1;
    const resultadoEncuesta = {"coca-cola preferida":[{"email":"mail@gmail.com","descripcionRespuesta":"Light"},{"email":"madsmamd@mail.com","descripcionRespuesta":"Light"},{"email":"hernan.andres.s@gmail.com","descripcionRespuesta":"Sin Azucar"},{"email":"hernansbz@gmail.com","descripcionRespuesta":"No tomo"}]};
    service.getResultadoEncuesta(idEncuesta)
      .subscribe(resultado => {
        //expect(resultado).toBe(1);
        expect(resultado['coca-cola preferida'] ).toBeDefined();
        expect(resultado['coca-cola preferida'].length).toBe(4);
        expect(resultado['coca-cola preferida'][0].email).toBe('mail@gmail.com');
      });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/encuestas/' + idEncuesta + '/resultado'
    );
    expect(req.request.method).toEqual('GET');

    req.flush(resultadoEncuesta);
  });
});