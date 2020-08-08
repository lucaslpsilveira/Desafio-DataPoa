import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, empty, Subject } from 'rxjs';
import { catchError, switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Detalhes } from './detalhes';

@Component({
  selector: 'app-linha-detalhes',
  templateUrl: './linha-detalhes.component.html',
  styleUrls: ['./linha-detalhes.component.css']
})
export class LinhaDetalhesComponent implements OnInit {

  error$ = new Subject<boolean>();  

  detalhes: {};

  coordenadas: {};

  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router 
  ) {}

  ngOnInit(): void {      
    this.onRefresh(this.route.snapshot.paramMap.get('id'));    
  }

  onRefresh(id){
    this.service.detalheLinha(id).subscribe(async res => {
      let aux = {'coordenadas':[]}
      await Object.entries(res).map((line) => {                        
        if(isNaN(Number(line[0]))){          
          aux[line[0]]= line[1];
        }else{          
          aux['coordenadas'].push(line[1]);
        }        
      });
      this.detalhes = aux;      
    });    
  }
}
