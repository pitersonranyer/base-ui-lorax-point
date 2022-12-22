
import { Component, OnInit } from '@angular/core';


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
      active: 'Dashboard'
    }
  ];
  
  palpiteUsuario = [
    {
      "casaVence": false,
      "empateJogo": false,
      "foraVence": false,
    },
  ]

  partidas = [
    {
      "clube_mandante_id": 1371,
      "clube_mandante_nome": "Cuiabá",
      "clube_mandante_abreviacao": "CUI",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2014/04/16/cuiaba45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 262,
      "clube_visitante_nome": "Flamengo",
      "clube_visitante_abreviacao": "FLA",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2018/04/09/Flamengo-45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },
    {
      "clube_mandante_id": 263,
      "clube_mandante_nome": "Botafogo",
      "clube_mandante_abreviacao": "BOT",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2019/02/04/botafogo-45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 264,
      "clube_visitante_nome": "Corinthians",
      "clube_visitante_abreviacao": "COR",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians_45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 266,
      "clube_mandante_nome": "Fluminense",
      "clube_mandante_abreviacao": "FLU",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2014/04/14/fluminense_45x45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 275,
      "clube_visitante_nome": "Palmeiras",
      "clube_visitante_abreviacao": "PAL",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2014/04/14/palmeiras_45x45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 276,
      "clube_mandante_nome": "São Paulo",
      "clube_mandante_abreviacao": "SAO",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2014/04/14/sao_paulo_45x45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 277,
      "clube_visitante_nome": "Santos",
      "clube_visitante_abreviacao": "SAN",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2014/04/14/santos_45x45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 280,
      "clube_mandante_nome": "Bragantino",
      "clube_mandante_abreviacao": "BGT",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2020/01/01/45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 282,
      "clube_visitante_nome": "Atlético-MG",
      "clube_visitante_abreviacao": "CAM",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2017/11/23/Atletico-Mineiro-escudo45px.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 285,
      "clube_mandante_nome": "Juventude",
      "clube_mandante_abreviacao": "JUV",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2021/04/29/juventude45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 290,
      "clube_visitante_nome": "Goiás",
      "clube_visitante_abreviacao": "GOI",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2021/03/01/goias-45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 293,
      "clube_mandante_nome": "Athlético-PR",
      "clube_mandante_abreviacao": "CAP",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2019/09/09/Athletico-PR-45x45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 294,
      "clube_visitante_nome": "Coritiba",
      "clube_visitante_abreviacao": "CFC",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2017/03/29/coritiba45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },
    {
      "clube_mandante_id": 314,
      "clube_mandante_nome": "Avaí",
      "clube_mandante_abreviacao": "AVA",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2018/09/04/escudo-avai-45x45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 327,
      "clube_visitante_nome": "América-MG",
      "clube_visitante_abreviacao": "AME",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2019/02/28/escudo45_1.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 354,
      "clube_mandante_nome": "Ceará",
      "clube_mandante_abreviacao": "CEA",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2019/10/10/ceara-45x45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 356,
      "clube_visitante_nome": "Fortaleza",
      "clube_visitante_abreviacao": "FOR",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2021/09/19/45_0000_Fortaleza-2021.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    },

    {
      "clube_mandante_id": 285,
      "clube_mandante_nome": "Internacional",
      "clube_mandante_abreviacao": "INT",
      "clube_mandante_escudos": "https://s.sde.globo.com/media/organizations/2016/05/03/inter45.png",
      "placar_oficial_mandante": 1,

      "clube_visitante_id": 373,
      "clube_visitante_nome": "Atlético-GO",
      "clube_visitante_abreviacao": "ACG",
      "clube_visitante_escudos": "https://s.sde.globo.com/media/organizations/2020/07/02/atletico-go-2020-45.png",
      "placar_oficial_visitante": 2,
      "casaVence": null,
      "empateJogo": null,
      "foraVence": null,
    }

  ]

  constructor(
   
  ) { }

  ngOnInit() {

    /*  this.listarTimesDaCompeticaoService.listarTimesDaCompeticao(2, 9)
       .subscribe((resultParcial) => {
         this.parciais = resultParcial;
       }) */

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
