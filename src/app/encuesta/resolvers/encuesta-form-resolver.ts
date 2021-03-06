import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { EncuestaService } from '../services/encuesta.service';
 
@Injectable()
export class EncuestaFormResolver implements Resolve<any> {
  constructor(
        private encuestaService:EncuestaService
  ) {}
  
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.encuestaService.getFormatoEncuesta(1).pipe(map(res => { return res }));
  }
}