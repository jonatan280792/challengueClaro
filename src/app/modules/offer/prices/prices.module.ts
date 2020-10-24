import { CommonModule } from '@angular/common';
import { PricesComponent } from './prices.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

const components = [PricesComponent];

const imports = [
  CommonModule,
  MatCardModule,
  RouterModule,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  schemas: [NO_ERRORS_SCHEMA],
})
export class PricesModule {}
