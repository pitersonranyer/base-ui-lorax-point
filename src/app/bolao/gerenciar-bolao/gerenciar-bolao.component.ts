import { Component, OnInit } from '@angular/core';
import { ApiBolaoService } from 'src/app/core/service/api.bolao';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-gerenciar-bolao',
  templateUrl: './gerenciar-bolao.component.html',
  styleUrls: ['./gerenciar-bolao.component.scss']
})
export class GerenciarBolaoComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl<Date | "">(""),
    end: new FormControl<Date | "">(""),
  });

  breadscrums = [
    {
      title: 'Dashboad',
      items: ['Home'],
      active: 'Dashboard'
    }
  ];

  nomeBolao = '';
  listLib = false;

  formatedDateStart = ''
  formatedDateEnd = ''

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
  situacaoBolaoSel: string = "";

  competicoes = []; 

  foraChecked = [];

  partidaAdd = [];


  constructor(private listarCompeticaoService: ApiBolaoService,
    private cadastrarBolaoService: ApiBolaoService,) {

  }

  ngOnInit() {


  }


  continuarCadastro() {

    this.formatedDateStart = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
    this.formatedDateEnd = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');

    this.listarCompeticaoService.listarPartidasCompeticao(this.formatedDateStart, this.formatedDateEnd)
      .subscribe((res) => {
        this.competicoes = res;
      })

    console.log(this.situacaoBolaoSel, this.nomeBolao);
    this.listLib = true;
  }

  pesquisarJogosPordata() {

    this.formatedDateStart = new Date(this.range.value.start).toLocaleDateString('en-GB').split('/').reverse().join('-');
    this.formatedDateEnd = new Date(this.range.value.end).toLocaleDateString('en-GB').split('/').reverse().join('-');

    this.listarCompeticaoService.listarPartidasCompeticao(this.formatedDateStart, this.formatedDateEnd)
      .subscribe((res) => {
        this.competicoes = res;
      })
  }


  SalvarJogoBolao() {
   
    const dadosBolao = {
      nome_bolao: this.nomeBolao,
      situacao_bolao: this.situacaoBolaoSel,
      partidas: this.partidaAdd
    };

this.cadastrarBolaoService.cadastrarBolao(dadosBolao)
      .subscribe(response => console.log(response));

  }

  addJogoBolao(i: number, id_partida: number) {
    console.log(id_partida);
    this.foraChecked[i] = true
    this.partidaAdd.push(id_partida);

  }

  limpar() {
    this.listLib = false;
  }


}
