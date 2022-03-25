import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//Components
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ReportComponent } from './layout/report/report.component';
import { UserComponent } from './layout/user/user.component';
import { MainComponent } from './layout/main/main.component';
import {SharedModule} from "./modules/shared/shared.module";
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ReportComponent,
    UserComponent,
    MainComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
