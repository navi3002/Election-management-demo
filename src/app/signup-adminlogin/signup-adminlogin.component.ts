import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm,FormBuilder,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-signup-adminlogin',
  templateUrl: './signup-adminlogin.component.html',
  styleUrls: ['./signup-adminlogin.component.css']
})
export class SignupAdminloginComponent implements OnInit {
  signupform!:FormGroup;
  constructor(private api:ApiserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signupform = this.fb.group({
      username:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }
login(FormValue:NgForm){
  this.api.logindata(FormValue).subscribe((data)=>{
    alert("Data was posted successfully");
    this.signupform.reset();
  },rej=>{
    console.log("Error"+rej);
  });
  console.log(FormValue);
}
}
