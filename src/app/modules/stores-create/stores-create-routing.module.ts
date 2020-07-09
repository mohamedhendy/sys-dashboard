import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreCreateComponent } from 'src/app/components/stores/store-create/store-create.component';


const routes: Routes = [{ path: '', component: StoreCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresCreateRoutingModule { }
