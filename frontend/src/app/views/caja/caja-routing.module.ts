import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CajaComponent } from './caja.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: CajaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule]
})
export class CajaRoutingModule { }

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ CajaComponent ],
    imports: [ FormsModule ]
  })
  .compileComponents();
});
