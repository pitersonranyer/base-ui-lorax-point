import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';

import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [CommonModule, NgbModule, MatTabsModule, SharedModule],

})
export class LayoutModule {}
