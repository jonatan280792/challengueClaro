import {
  Routes,
  RouterModule
} from '@angular/router';
import { NgModule } from '@angular/core';
import { OfferComponent } from './offer.component';

const routes: Routes = [
  { path: '', component: OfferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRouting { }
