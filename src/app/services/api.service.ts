import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators'; 
import { Linha } from '../home/linha'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'http://www.poatransporte.com.br/php/facades/process.php';

  constructor(private http: HttpClient) { }

  listaLinhas(tipo){
    return this.http.get<Linha[]>(this.apiUrl+'?a=nc&p=%&t='+tipo).pipe();
  }  

  detalheLinha(id){
    console.log('entrou com id', this.apiUrl+'?a=il&p='+id)
    return this.http.get<any>(this.apiUrl+'?a=il&p='+id)
      .pipe(      
        tap(linha => console.log('leu a linha')),        
      );
  }  
}
