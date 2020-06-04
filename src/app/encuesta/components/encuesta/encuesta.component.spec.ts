import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaComponent } from './encuesta.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { EncuestaService } from '../../services/encuesta.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpinnerService } from 'src/app/services/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EncuestaComponent', () => {
  let component: EncuestaComponent;
  let fixture: ComponentFixture<EncuestaComponent>;

  const formatoEncuesta = [{
    encuestaId:1,
    preguntas:[{
      "preguntaId":1,
      "descripcionPregunta":"coca-cola preferida",
      "respuestas":[{
        "id":1,
        "descripcion":"Light",
        "pregunta":{"id":1,"descripcion":"coca-cola preferida"}
      },{
        "id":2,
        "descripcion":"Sin Azucar",
        "pregunta":{"id":1,"descripcion":"coca-cola preferida"}
      }]
    }]
  }];

  const fakeActivatedRoute = {
    snapshot: {
      data: {
        "formularioEncuesta": this.formatoEncuesta
      }
    }
  } as unknown as ActivatedRoute;

  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaComponent ],
      imports: [
        RouterModule, 
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [{
        provide: ActivatedRoute, useValue: fakeActivatedRoute
      },{
        provide: MatDialog, useValue: {}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestaComponent);
    component = fixture.componentInstance;
    //component.formatoEncuesta = this.formatoEncuesta;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
