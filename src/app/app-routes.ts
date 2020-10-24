import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('@modules/offer/offer.module').then(m => m.OfferModule),
    path: '',
  },
  // {
  //   loadChildren: () => import('@modules/list/list.module').then(m => m.ListModule),
  //   path: 'items',
  // },
  // {
  //   loadChildren: () => import('@modules/item/item.module').then(m => m.ItemModule),
  //   path: 'items/:id',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }