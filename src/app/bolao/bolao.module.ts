import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BolaoRoutingModule } from './bolao-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule as FormModule, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerenciarBolaoComponent } from './gerenciar-bolao/gerenciar-bolao.component';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    BolaoRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [GerenciarBolaoComponent],

})
export class BolaoModule {}
