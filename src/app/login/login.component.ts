
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrserviceService } from '../toastrservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private api:ApiserviceService ,private http:HttpClient, private formbuilder:FormBuilder,private router:Router, private tostr:ToastrserviceService) {
   
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
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
      for(const i of this.alldata){
            this.object.push(i);
        }
    },rej =>{
      console.log(rej);
    });
    }

  adminlogindata(formvalue:any){
    console.log(formvalue)
  for(const i  of this.object){
    if(i.admin_name ==  formvalue.username && i.admin_password == formvalue.password){
        this.flag = 1;
    }

 }
  if(this.flag == 1 ){
    this.tostr.showSuccess("Successfully",'Login Successfully')
    this.router.navigate(['/adminlogin']);

   
  }

  else{
      this.tostr.showError("Error",'Username and Password Invalid')
      this.notify=("invalid user user Credentials");
   
  }

}
}