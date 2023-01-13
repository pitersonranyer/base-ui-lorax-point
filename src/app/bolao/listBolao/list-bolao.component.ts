import { Component, OnInit } from '@angular/core';
import { ApiBolaoService } from 'src/app/core/service/api.bolao';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-bolao',
  templateUrl: './list-bolao.component.html',
  styleUrls: ['./list-bolao.component.scss']
})
export class ListBolaoComponent implements OnInit {
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

  boloes = [];
 
  constructor(private listTotalBilheteBolaoService: ApiBolaoService) {

  }

  ngOnInit() {

    this.listTotalBilheteBolaoService.listTotalBilheteBolao("Aberto")
      .subscribe((res) => {
        this.boloes = res;
      })

  }



 

}
