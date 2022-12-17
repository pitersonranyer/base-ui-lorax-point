import { Component, OnInit } from '@angular/core';
import { User_Point } from 'src/app/core/models/user_point';
import { ApiCartolaService } from 'src/app/core/service/api.cartola';
import { ApiUsuarioService } from 'src/app/core/service/api.usuario';



@Component({
  selector: 'app-dashboard3',
  templateUrl: './dashboard3.component.html',
  styleUrls: ['./dashboard3.component.scss']
})
export class Dashboard3Component implements OnInit {
 
  parciais = [];
  public usuario: User_Point = <User_Point>{};

  constructor(
    private listarTimesDaCompeticaoService: ApiCartolaService,
    private cadastrar: ApiUsuarioService,
  ) { }

  ngOnInit() {

   /*  this.cadastrar.cadastrarUserPoint(this.usuario)
    .subscribe(
      () => {  
      
      }); */

   /*  this.listarTimesDaCompeticaoService.listarTimesDaCompeticao(2, 8)
     .subscribe((resultParcial) => {
        this.parciais = resultParcial;
      }) */
    
  }

  
}
