import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserTableComponent } from './user-table/user-table.component';
import { NavbardComponent } from './navbard/navbard.component';
import { UserListComponent } from './user-list/user-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { BannerComponent } from './banner/banner.component';
import { ModalComponent } from './modal/modal.component';
import { SideBardComponent } from './side-bard/side-bard.component';

@NgModule({
  declarations: [
    UserTableComponent,
    NavbardComponent,
    UserListComponent,
    InventoryListComponent,
    ProductsListComponent,
    BannerComponent,
    ModalComponent,
    SideBardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserTableComponent,
    NavbardComponent,
    SideBardComponent,
    UserListComponent,
    InventoryListComponent,
    ProductsListComponent,
    BannerComponent
  ]
})
export class ComponentsModule { }

