import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresCreateRoutingModule } from './stores-create-routing.module';
import { StoreCreateComponent } from 'src/app/components/stores/store-create/store-create.component';



@NgModule({
  declarations: [StoreCreateComponent],
  imports: [
    CommonModule,
    StoresCreateRoutingModule
  ]
})
export class StoresCreateModule { }
