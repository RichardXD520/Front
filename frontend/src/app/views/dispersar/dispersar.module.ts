import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispersarRoutingModule } from './dispersar-routing.module';
import { DispersarComponent } from './dispersar.component';


@NgModule({
  declarations: [
    DispersarComponent
  ],
  imports: [
    CommonModule,
    DispersarRoutingModule
  ]
})
export class DispersarModule { }
