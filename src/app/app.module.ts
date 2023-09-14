import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { ProducttComponent } from './productt/productt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApipageComponent } from './apipage/apipage.component';
import { AdimComponent } from './adim/adim.component';
import { UpdateComponent } from './update/update.component';
import { GetcontactdetialsComponent } from './getcontactdetials/getcontactdetials.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    ProducttComponent,
    CheckoutComponent,
    RegistrationComponent,
    ApipageComponent,
    AdimComponent,
    UpdateComponent,
    GetcontactdetialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
