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


  constructor(private api:ApiserviceService,private fb:FormBuilder,private router:Router, private toastr:ToastrserviceService) { }
  citizenloginform!:FormGroup
  alldata :any;
  flag = 0;
  notify= '';
  object:any=[];
  ngOnInit(): void {

    this.citizenloginform = this.fb.group({
      citizenadhaar:['',Validators.required],
      citizenphoneno:['',Validators.required],
    
    })
   


  this.api.citizenloginform().subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.alldata=data;
    this.alldata=this.alldata.docs;
    console.log(this.alldata);
    for(const i of this.alldata){
        const elt = this.alldata[i];

          this.object.push(i);
          console.log('Fetched successfuly');

      }
  });
}

getboothidChange(formvalue:any){
  console.log(formvalue)
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