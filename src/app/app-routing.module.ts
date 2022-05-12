import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitizenloginComponent } from './citizenlogin/citizenlogin.component';
import { HomeComponent } from './home/home.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
const routes: Routes = [
  {path:' ',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'Citizen',component:CitizenloginComponent},
  {path:'adminlogin',component:AdminloginpageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
