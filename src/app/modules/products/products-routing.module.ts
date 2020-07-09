import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsAllComponent } from 'src/app/components/products/products-all/products-all.component';

const routes: Routes = [{ path: '', component: ProductsAllComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
