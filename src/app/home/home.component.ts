import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Linha } from './linha';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  linhas: Linha[];

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.listaOnibus()
      .subscribe(dados => this.linhas = dados);
  }

}
