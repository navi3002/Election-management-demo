import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitizenloginComponent } from './citizenlogin/citizenlogin.component';
import { HomeComponent } from './home/home.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { SignupAdminloginComponent } from './signup-adminlogin/signup-adminlogin.component';
import { CitizenSignupComponent } from './citizen-signup/citizen-signup.component';
import { CitizenmainpageComponent } from './citizenmainpage/citizenmainpage.component';
import { ManagecitizenPageComponent } from './managecitizen-page/managecitizen-page.component';
import { ManagevotingpageComponent } from './managevotingpage/managevotingpage.component';
import { ManagecandidatepageComponent } from './managecandidatepage/managecandidatepage.component';
import { ManagepartypageComponent } from './managepartypage/managepartypage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CitizenaboutpageComponent } from './citizenaboutpage/citizenaboutpage.component';
import { VotecitizenpageComponent } from './votecitizenpage/votecitizenpage.component';
import { AboutComponent } from './about/about.component';
import { PartydetailsComponent } from './partydetails/partydetails.component';
import { CitizendetailsComponent } from './citizendetails/citizendetails.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'Citizen',component:CitizenloginComponent},
  {path:'adminlogin',component:AdminloginpageComponent},
  {path:'signupadminlogin',component:SignupAdminloginComponent},
  {path:'citizensign',component:CitizenSignupComponent},
  {path:'citizenmainpage',component:CitizenmainpageComponent},
  {path:'managecitizen',component:ManagecitizenPageComponent},
  {path:'managevoting',component:ManagevotingpageComponent},
  {path:'managecandidate',component:ManagecandidatepageComponent},
  {path:'manageparty',component:ManagepartypageComponent},
  {path:'Contact Us',component:ContactusComponent},
  {path:'citizenaboutpage',component:CitizenaboutpageComponent},
  {path:'votecitizenpage',component:VotecitizenpageComponent},
  {path:'logouttocitizenlogin',component:CitizenloginComponent},
  {path:'homecitizen',component:CitizenmainpageComponent},
  {path:'about',component:AboutComponent},
  {path:'partydetails',component:PartydetailsComponent},
  {path:'citizendetails',component:CitizendetailsComponent},
  {path:'votingpage',component:VotecitizenpageComponent},
  {path:'citizenmainpage',component:CitizenmainpageComponent}

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
