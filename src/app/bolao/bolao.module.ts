import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { BolaoRoutingModule } from './bolao-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule as FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerenciarBolaoComponent } from './gerenciar-bolao/gerenciar-bolao.component';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import { ListBolaoComponent } from './listBolao/list-bolao.component';


@NgModule({
  imports: [
    CommonModule,
    BolaoRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule
  ],

  
  declarations: [GerenciarBolaoComponent , ListBolaoComponent],
  
  
})
export class BolaoModule {}
