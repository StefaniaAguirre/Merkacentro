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
import { EmpleadosComponent } from './modules/empleados/empleados.component';
import { ProfilesComponent } from './modules/Profiles/profiles.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InfoPersonalComponent,
    InfoPermisosComponent,
    InfoContratoComponent,
    HorariosComponent,
    CalendarioComponent,
    LoginComponent,
    EmpleadosComponent,
    ProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
