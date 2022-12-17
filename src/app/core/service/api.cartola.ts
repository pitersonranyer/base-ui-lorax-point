
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompeticaoCartola } from 'src/app/interfaces/competicaoCartola';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
  })
  export class ApiCartolaService {

    constructor(private http: HttpClient, private utilService: UtilService) { }


      listarCompeticaoAtivas(): Observable<CompeticaoCartola[]> {
        const url = this.utilService.getUrlBackend() + `/competicao/listarCompeticaoAtivas`;
        return this.http.get<CompeticaoCartola[]>(url);
      }

      listarTimesDaCompeticao(id_competicao: number, numerorodadaatual: number): Observable<any[]> {
        const url = this.utilService.getUrlBackend() + `/time_competicao/listarTimesDaCompeticao/${id_competicao}/${numerorodadaatual}`;
        return this.http.get<any[]>(url)
      }

  }