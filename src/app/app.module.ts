import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CitizenloginComponent } from './citizenlogin/citizenlogin.component';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { AdminloginpageComponent } from './adminloginpage/adminloginpage.component';
import { RouteroutletComponent } from './routeroutlet/routeroutlet.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ElectionManagementDescriptionComponent } from './election-management-description/election-management-description.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupAdminloginComponent } from './signup-adminlogin/signup-adminlogin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitizenloginComponent,
    HomeComponent,
    NotificationComponent,
    AboutComponent,
    ContactusComponent,
    MainComponent,
    AdminloginpageComponent,
    RouteroutletComponent,
    NavigationComponent,
    ElectionManagementDescriptionComponent,
    SignupAdminloginComponent,
    NavComponent,

     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
