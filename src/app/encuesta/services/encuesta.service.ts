import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http: HttpClient) { }

  private DOMAIN_BACKEND: string = 'http://localhost:8080/';

  /** Cuerpo de la encuesta */
  getFormatoEncuesta(idEncuesta: number): Observable<[]> {
    const url = this.DOMAIN_BACKEND + "encuestas/" + idEncuesta + "/formato";
    return this.http.get<[]>(url);
  }

  getResultadoEncuesta(idEncuesta: number): Observable<[]> {
    const url = this.DOMAIN_BACKEND + "encuestas/" + idEncuesta + "/resultado";
    return this.http.get<[]>(url);
  }

  saveEncuesta(form: any): Observable<[]> {
    const url = this.DOMAIN_BACKEND + "encuestas/";
    return this.http.post<[]>(url, form);
  }
}













