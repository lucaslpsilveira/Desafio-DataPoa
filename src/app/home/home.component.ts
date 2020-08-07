import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Linha } from './linha';
import { Observable, empty, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linhas$: Observable<Linha[]>;

  error$ = new Subject<boolean>();

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.linhas$ = this.service.listaOnibus()
      .pipe(
        catchError(error => {
          this.error$.next(true);
          return empty();          
        })
      );
  }

}
