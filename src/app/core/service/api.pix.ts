
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
  })
  export class ApiPixService {

    constructor(private http: HttpClient, private utilService: UtilService) { }


    gerarQrCode(valorPix: number, descPix: string): Observable<any> {
        const url = this.utilService.getUrlBackend() + `${valorPix}/${descPix}`;
        return this.http.get<any>(url)
      }
      

  }