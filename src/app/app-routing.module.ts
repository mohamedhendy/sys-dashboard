import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'stores',
    loadChildren: () =>
      import('./modules/stores/stores.module').then((m) => m.StoresModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'product-create',
    loadChildren: () =>
      import('./modules/products-create/products-create.module').then(
        (m) => m.ProductsCreateModule
      ),
  },
  {
    path: 'store-create',
    loadChildren: () =>
      import('./modules/stores-create/stores-create.module').then(
        (m) => m.StoresCreateModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
