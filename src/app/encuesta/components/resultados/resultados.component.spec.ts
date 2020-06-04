import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosComponent } from './resultados.component';
import { EncuestaComponent } from '../encuesta/encuesta.component';
import { CommonModule } from '@angular/common';
import { EncuestaRoutingModule } from '../../encuesta-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SpinnerService } from 'src/app/services/spinner.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ResultadosComponent', () => {
  let component: ResultadosComponent;
  let fixture: ComponentFixture<ResultadosComponent>;

  const fakeActivatedRoute = {
    snapshot: {
      data: {
        resultadoEncuesta: 
          { 
            "coca-cola preferida":[
              {"email":"madsmamd@mail.com","descripcionRespuesta":"Light"},
              {"email":"hernan.andres.s@gmail.com","descripcionRespuesta":"Sin Azucar"},
              {"email":"hernansbz@gmail.com","descripcionRespuesta":"No tomo"}
            ]
          }
      }
    }
  } as unknown as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestaComponent, ResultadosComponent ],
      imports: [
        RouterModule, 
        RouterTestingModule,
        CommonModule,
        EncuestaRoutingModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatTableModule,
        MatProgressSpinnerModule
      ],
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
