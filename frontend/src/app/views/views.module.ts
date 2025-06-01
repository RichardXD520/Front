import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ComponentsModule } from "../shared/components/components.module";
import { ViewsRoutingModule } from './views-routing.module';
import { InventoryComponent } from './inventory/inventory.component';
import { FormsModule } from '@angular/forms';
import { CajaComponent } from './caja/caja.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    BeneficiariesComponent,
    InventoryComponent,
    HomeComponent,
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule,
    FormsModule

]
})
export class ViewsModule { }
