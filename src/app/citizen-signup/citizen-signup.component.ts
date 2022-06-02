import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';



@Component({
  selector: 'app-citizen-signup',
  templateUrl: './citizen-signup.component.html',
  styleUrls: ['./citizen-signup.component.css']
})
export class CitizenSignupComponent implements OnInit {
  citizensignup!:FormGroup;

  constructor(private api:ApiserviceService,private fb:FormBuilder) { }

  
  ngOnInit(): void {

      this.citizensignup = this.fb.group({
        username:['',Validators.required],
        firstname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',Validators.required],
        password:['',Validators.required],
        confirmpassword:['',Validators.required]
      })
    }

    citizenlogin(FormValue:NgForm){
      this.api.citizensignupdata(FormValue).subscribe((data)=>{
        alert("Data was posted successfully");
        this.citizensignup.reset();
      },rej=>{
        console.log("Error"+rej);
      });
      console.log(FormValue);
    }

}
