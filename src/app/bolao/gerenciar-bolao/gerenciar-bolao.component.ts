import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gerenciar-bolao',
  templateUrl: './gerenciar-bolao.component.html',
  styleUrls: ['./gerenciar-bolao.component.scss']
})
export class GerenciarBolaoComponent implements OnInit {


  breadscrums = [
    {
      title: 'Dashboad',
      items: ['Home'],
      active: 'Dashboard'
    }
  ];

  nomeBolao = '';
  listLib = false;

  listSituacao: any = [
    {
      full: "Aberto",
    },
    {
      full: "Fechado",
    },
    {
      full: "Encerrado",
    }
  ];
  selecionado: string = "";

  constructor() {

  }

  ngOnInit() { }

  continuarCadastro() {
    console.log(this.selecionado, this.nomeBolao);
    this.listLib = true;
  }

  limpar() {
    this.listLib = false;
  }


}
