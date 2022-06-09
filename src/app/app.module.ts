import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CitizenloginComponent } from './citizenlogin/citizenlogin.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CitizenmainpageComponent } from './citizenmainpage/citizenmainpage.component';
import { ManagecitizenPageComponent } from './managecitizen-page/managecitizen-page.component';
import { ManagepartypageComponent } from './managepartypage/managepartypage.component';
import { ManagecandidatepageComponent } from './managecandidatepage/managecandidatepage.component';
import { ManagevotingpageComponent } from './managevotingpage/managevotingpage.component';
import { CitizenaboutpageComponent } from './citizenaboutpage/citizenaboutpage.component';
import { VotecitizenpageComponent } from './votecitizenpage/votecitizenpage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitizenloginComponent,
    HomeComponent,
    AboutComponent,
    ContactusComponent,
    MainComponent,
    AdminloginpageComponent,
    NavComponent,
    CitizenmainpageComponent,
    ManagecitizenPageComponent,
    ManagepartypageComponent,
    ManagecandidatepageComponent,
    ManagevotingpageComponent,
    CitizenaboutpageComponent,
    VotecitizenpageComponent,

     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
