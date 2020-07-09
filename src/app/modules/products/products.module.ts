import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsAllComponent } from 'src/app/components/products/products-all/products-all.component';


@NgModule({
  declarations: [ ProductsAllComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
