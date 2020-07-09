import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductCreateComponent } from 'src/app/components/products/product-create/product-create.component';


const routes: Routes = [{ path: '', component: ProductCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsCreateRoutingModule { }
