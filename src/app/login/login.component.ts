
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { NgForm,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private api:ApiserviceService ,private http:HttpClient, private formbuilder:FormBuilder,private router:Router) {
   
   }

   adminloginform!:FormGroup;
   alldata :any;
   flag = 0;
   notify= '';
   object:any=[];

  ngOnInit(): void {
    

    this.adminloginform = this.formbuilder.group(
      {
        'username':['',Validators.required],
        'password':['',Validators.required],

      }
    )
    this.api.adminuserlogin().subscribe(data=>{
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

  adminlogindata(formvalue:any){
    console.log(formvalue)
  for(const i  of this.object){
    console.log(i);
    if(i.admin_name ==  formvalue.username && i.admin_password == formvalue.password){
        this.flag = 1;
    }
 }
  if(this.flag == 1 ){
    this.router.navigate(['/adminlogin']);
   
  }

  else{
      console.log("invalid user credentials");
      this.notify=("invalid user user Credentials");
   
  }

}
}