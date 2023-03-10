import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GerenciarBolaoComponent } from './gerenciar-bolao/gerenciar-bolao.component';
import { ListBolaoComponent } from './listBolao/list-bolao.component';


const routes: Routes = [
  {
    path: 'bolao',
    component: GerenciarBolaoComponent
  },
  {
    path: 'list-bolao',
    component: ListBolaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolaoRoutingModule {}
