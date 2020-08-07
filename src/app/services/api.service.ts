import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'; 
import { Linha } from '../home/linha'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o';

  constructor(private http: HttpClient) { }

  listaOnibus(){
    return this.http.get<Linha[]>(this.apiUrl)
      .pipe(      
        tap(linhas => console.log('leu os onibus')),
        catchError(this.handleError('getOnibus', []))
      );
  }  

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
