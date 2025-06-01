import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Importa el módulo de componentes compartidos
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent
    // No declares BannerComponent aquí si ya está en ComponentsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // No agregues CommonModule ni CajaRoutingModule aquí si son de features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
