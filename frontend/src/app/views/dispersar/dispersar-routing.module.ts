import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispersarComponent } from './dispersar.component';

const routes: Routes = [{ path: '', component: DispersarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispersarRoutingModule { }
