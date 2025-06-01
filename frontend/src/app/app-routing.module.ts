import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesComponent } from './views/beneficiaries/beneficiaries.component';
import { InventoryComponent } from './views/inventory/inventory.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [

   {
    path: 'home',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule), component:HomeComponent
  },

  {
    path: 'beneficiaries',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule), component:BeneficiariesComponent
  },
  {
    path: 'inventory',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule), component:InventoryComponent
  }, {
    path: 'beneficiares',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
 { path: 'dispersar', loadChildren: () => import('./views/dispersar/dispersar.module').then(m => m.DispersarModule) },
 { path: 'caja', loadChildren: () => import('./views/caja/caja.module').then(m => m.CajaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Ejemplo para HomeComponent
// filepath: src/app/views/home/home.component.spec.ts
import { ComponentsModule } from 'src/app/shared/components/components.module';

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [ HomeComponent ],
    imports: [ ComponentsModule ]
  })
  .compileComponents();
});
