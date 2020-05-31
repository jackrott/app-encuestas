import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncuestaComponent } from './components/encuesta/encuesta.component';
import { EncuestaFormResolver } from './resolvers/encuesta-form-resolver';
import { EncuestaResultadoResolver } from './resolvers/encuesta-resultado-resolver';
import { ResultadosComponent } from './components/resultados/resultados.component';


const routes: Routes = [
  { path: 'encuesta', component: EncuestaComponent, 
    resolve: {
      formularioEncuesta: EncuestaFormResolver,
    }
  }, 
  { path: 'resultados', component: ResultadosComponent, 
    resolve: {
      resultadoEncuesta: EncuestaResultadoResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EncuestaFormResolver,EncuestaResultadoResolver]
})
export class EncuestaRoutingModule { }
