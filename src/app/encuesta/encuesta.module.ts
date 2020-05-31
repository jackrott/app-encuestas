import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestaRoutingModule } from './encuesta-routing.module';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [EncuestaComponent, ResultadosComponent],
  imports: [
    CommonModule,
    EncuestaRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatProgressSpinnerModule
  ]
})
export class EncuestaModule { }
