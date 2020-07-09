import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresAllComponent } from 'src/app/components/stores/stores-all/stores-all.component';

const routes: Routes = [{ path: '', component: StoresAllComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoresRoutingModule { }
