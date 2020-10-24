import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer.component';
import { OfferRouting } from './offer.router';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClaroService } from '@services/claro-service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CharacteristicsModule } from './characteristics/characteristics.module';
import { PricesModule } from './prices/prices.module';

const components = [OfferComponent];

const imports = [
  CommonModule,
  CharacteristicsModule,
  FormsModule,
  MatAutocompleteModule,
  MatCardModule,
  MatExpansionModule,
  MatInputModule,
  MatSelectModule,
  OfferRouting,
  PricesModule,
  ReactiveFormsModule,
  RouterModule,
];

const providers = [ClaroService];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
})
export class OfferModule {}
