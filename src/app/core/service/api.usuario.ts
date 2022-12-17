
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User_Point } from '../models/user_point';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
  })
  export class ApiUsuarioService {

    constructor(private http: HttpClient, private utilService: UtilService) { }

    cadastrarUserPoint(user: User_Point) {
      const url = this.utilService.getUrlBackend() + `/usuarios`;
      console.log(url, user);
      return this.http.post(url, user);
    }

  }