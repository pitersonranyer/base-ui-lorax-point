
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class ApiBolaoService {

    constructor(private http: HttpClient, private utilService: UtilService) { }


      listarCompeticao(): Observable<any[]> {
        const url = this.utilService.getUrlBackend() + `/footballData/competicoes`;
        return this.http.get<any[]>(url)
      }


      listarPartidasCompeticao(dtInicio: string, dtFim: string): Observable<any[]> {
        const url = this.utilService.getUrlBackend() + `/footballData/listPartidasCompeticaoQuery/${dtInicio}/${dtFim}`;
        return this.http.get<any[]>(url)
      }


      cadastrarBolao(bolao: any) {
        const url = this.utilService.getUrlBackend() + `/footballDataBolao`;
        return this.http.post(url, bolao);
      }


      listPartidasBolao(id_bolao: number): Observable<any[]> {
        const url = this.utilService.getUrlBackend() + `/footballDataBolao/listPartidasBolao/${id_bolao}`;
        return this.http.get<any[]>(url)
      }



      gerarBilheteBolao(bilhete: any) {
        const url = this.utilService.getUrlBackend() + `/footballDataBilhete`;
        return this.http.post(url, bilhete);
      }


  }