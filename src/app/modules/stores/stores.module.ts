import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresAllComponent } from 'src/app/components/stores/stores-all/stores-all.component';

@NgModule({
  declarations: [ StoresAllComponent],
  imports: [CommonModule, StoresRoutingModule],
})
export class StoresModule {}
