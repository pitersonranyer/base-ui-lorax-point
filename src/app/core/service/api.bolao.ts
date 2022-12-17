
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

@Injectable({
    providedIn: 'root'
  })
  export class ApiBolaoService {

    constructor(private http: HttpClient, private utilService: UtilService) { }



  }