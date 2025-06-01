import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { InventoryComponent } from './inventory/inventory.component';
import { CajaComponent } from './caja/caja.component';
import { DispersarComponent } from './dispersar/dispersar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'beneficiaries',
    component: BeneficiariesComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },{
    path: 'caja',
    component: CajaComponent
  },
  {
    path: 'dispersar',
    component: DispersarComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
