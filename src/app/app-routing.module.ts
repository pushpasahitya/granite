import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { ServicesComponent } from './services/services.component';
import { ProducttComponent } from './productt/productt.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ApipageComponent } from './apipage/apipage.component';
import { AdimComponent } from './adim/adim.component';
import { UpdateComponent } from './update/update.component';
import { GetcontactdetialsComponent } from './getcontactdetials/getcontactdetials.component';

const routes: Routes = [
  {path:'',redirectTo:'first',pathMatch:'full'},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'registration',component:RegistrationComponent},
 {path:'home',component:HomeComponent},
 {path:'about',component:AboutComponent},
 {path:'service',component:ServicesComponent},
 {path:'product',component:ProducttComponent},
 {path:'login',component:LoginComponent},    
 {path:'checkout',component:CheckoutComponent},  
 {path:'apipages',component:ApipageComponent}, 
 {path:'update',component:UpdateComponent}, 
 {path:'admin',component:AdimComponent}, 
 {path:'getcontactdetials',component:GetcontactdetialsComponent}, 
{path:'**',component:HomeComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
