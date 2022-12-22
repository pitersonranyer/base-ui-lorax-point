import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { PixRoutingModule } from './pix-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule as FormModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { PixComponent } from './pix/pix.component';
import { CurrencyI18nDirective } from './pix/currency-i18n.directive';


@NgModule({
  imports: [
    CommonModule,
    PixRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormModule,
    ReactiveFormsModule,
    MatStepperModule
        
  ],
  declarations: [PixComponent, CurrencyI18nDirective],

})
export class PixModule {}
