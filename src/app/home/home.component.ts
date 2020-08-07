import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Linha } from './linha';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linhas$: Observable<Linha[]>;

  error$ = new Subject<boolean>();

  public queryField : string;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.onRefresh('o');
  }

  onRefresh(tipo){
    this.linhas$ = this.service.listaLinhas(tipo)
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return empty();          
        })
      );
  }

  onSearch(tipo){
    this.onRefresh(tipo);
  }

}
