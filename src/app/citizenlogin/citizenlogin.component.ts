import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-citizenlogin',
  templateUrl: './citizenlogin.component.html',
  styleUrls: ['./citizenlogin.component.css']
})
export class CitizenloginComponent implements OnInit {
  citizenloginform!:FormGroup

  constructor(private api:ApiserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {

    this.citizenloginform = this.fb.group({
      citizenadhaar:['',Validators.required],
      citizenphoneno:['',Validators.required],
    
    })
   
  }
}