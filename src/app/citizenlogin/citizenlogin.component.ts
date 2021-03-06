import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { ToastrserviceService } from '../toastrservice.service';
@Component({
  selector: 'app-citizenlogin',
  templateUrl: './citizenlogin.component.html',
  styleUrls: ['./citizenlogin.component.css']
})
export class CitizenloginComponent implements OnInit {
  citizenloginform!:FormGroup
  alldata :any;
  flag = 0;
  notify= '';
  object:any=[];

  constructor(private api:ApiserviceService,private formbuilder:FormBuilder,private router:Router, private toastr:ToastrserviceService) { }
  
  ngOnInit(): void {

    this.citizenloginform = this.formbuilder.group({
      citizenadhaar:['',[Validators.required,Validators.pattern('[0-9]{4}[0-9]{4}[0-9]{4}')]],
      citizenphoneno: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],  
    });

  this.api.citizenloginform().subscribe(data=>{
    console.log(data);
    this.alldata=data;
    this.alldata=this.alldata.docs;
    for(const i of this.alldata){
      this.object.push(i);
      console.log('Fetched successfuly');
      }
  },rej=>{
    console.log(rej);
  }
  );

}

citizenLoginId(formvalue:any){
for(const i  of this.object){
  console.log(i);
  if(i.citizenadhaar ==  formvalue.citizenadhaar && i.phonenumber == formvalue.citizenphoneno){
    this.flag = 1;
    this.api.loginCredentials=i;
    localStorage.setItem("login",JSON.stringify(this.api.loginCredentials));
  }
}
if(this.flag == 1 ){
  this.toastr.showSuccess("SUCCESS",'Login Successfully')
  this.router.navigate(['/citizenmainpage']);
 
}

else{
  this.toastr.showError("Error",'Adhaarname or Phonenumber was invalid')
  console.log("invalid user credentials");
}

}
}