import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsCreateRoutingModule } from './products-create-routing.module';
import { ProductCreateComponent } from 'src/app/components/products/product-create/product-create.component';
@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    ProductsCreateRoutingModule
  ]
})
export class ProductsCreateModule { }
