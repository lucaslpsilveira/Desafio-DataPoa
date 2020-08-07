import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Linha } from './linha';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linhas$: Observable<Linha[]>;

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.linhas$ = this.service.listaOnibus();
  }

}
