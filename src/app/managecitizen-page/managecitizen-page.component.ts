import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-managecitizen-page',
  templateUrl: './managecitizen-page.component.html',
  styleUrls: ['./managecitizen-page.component.css']
})
export class ManagecitizenPageComponent implements OnInit {
  citizenuserpage!:FormGroup;
  constructor(private api:ApiserviceService, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.citizenuserpage = this.fb.group({
      citizenname:['',Validators.required],
      citizenemail:['',Validators.required],
      citizenadhaar:['',Validators.required],
      dob:['',Validators.required],
      phonenumber:['',Validators.required],
      boothid:['',Validators.required],
      boothno:['',Validators.required],
      citizenadress:['',Validators.required],
      citizencity:['',Validators.required],
      citizenstate:['',Validators.required]

    })



  }
citizenuser(FormValue:NgForm){
  this.api.citizenuserdata(FormValue).subscribe((data:any)=>{
    alert("Data was posted Succesfully");
    this.citizenuserpage.reset();
  },rej=>{
    console.log("Error"+rej);
      });
      console.log(FormValue);

  }

}
