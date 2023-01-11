
import { Component, OnInit } from '@angular/core';
import { ApiBolaoService } from 'src/app/core/service/api.bolao';


@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss']
})
export class Dashboard2Component implements OnInit {

  parciais = [];

  casaChecked = [];
  empateChecked = [];
  foraChecked = [];
  numeroOcrs = 10;
  
  breadscrums = [
    {
      title: 'Dashboad',
      items: ['Home'],
      active: 'Bolão'
    }
  ];
  
  palpiteUsuario = [
    {
      "casaVence": false,
      "empateJogo": false,
      "foraVence": false,
    },
  ]

  partidas = [];

  constructor(private listPartidasBolaoService: ApiBolaoService ) { }

  ngOnInit() {

      this.listPartidasBolaoService.listPartidasBolao(10)
       .subscribe((resultList) => {
         this.partidas = resultList;

       }) 

    for (var i = 0; i < this.numeroOcrs; i++) {
      this.casaChecked.push(false);
      this.empateChecked.push(false);
      this.foraChecked.push(false);
    }

  }


  casaVence(i: number) {
    this.casaChecked[i] = true
    this.empateChecked[i] = false
    this.foraChecked[i] = false
  }

  empateJogo(i: number) {
    this.casaChecked[i] = false
    this.empateChecked[i] = true
    this.foraChecked[i] = false
     }

  foraVence(i: number) {
    this.casaChecked[i] = false
    this.empateChecked[i] = false
    this.foraChecked[i] = true
  }


  confirma() {

    for (var i = 0; i < this.numeroOcrs; i++) {
      this.partidas[i].casaVence  = this.casaChecked[i] ;
      this.partidas[i].empateJogo = this.empateChecked[i];
      this.partidas[i].foraVence  = this.foraChecked[i];
    }

    console.log(this.partidas);

  }

}
