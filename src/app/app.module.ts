import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './modules/main/main.component';
import { InfoPersonalComponent } from './modules/empleados/info-personal/info-personal.component';
import { InfoPermisosComponent } from './modules/empleados/info-permisos/info-permisos.component';
import { InfoContratoComponent } from './modules/empleados/info-contrato/info-contrato.component';
import { HorariosComponent } from './modules/horarios/horarios.component';
import { CalendarioComponent } from './modules/calendario/calendario.component';
import { LoginComponent } from './modules/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoPersonalComponent,
    InfoPermisosComponent,
    InfoContratoComponent,
    HorariosComponent,
    CalendarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
