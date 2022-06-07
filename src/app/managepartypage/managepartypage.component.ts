import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-managepartypage',
  templateUrl: './managepartypage.component.html',
  styleUrls: ['./managepartypage.component.css']
})
export class ManagepartypageComponent implements OnInit {
partydetails!:FormGroup;
  constructor(private api:ApiserviceService, private fb:FormBuilder) { }
  

  ngOnInit(): void {

    this.partydetails = this.fb.group({
      partyname1:['',Validators.required],
      partyname2:['',Validators.required],
      partyname3:['',Validators.required],
      partyname4:['',Validators.required],
      partyname5:['',Validators.required],
      candidatename1:['',Validators.required],
      candidatename2:['',Validators.required],
      candidatename3:['',Validators.required],
      candidatename4:['',Validators.required],
      candidatename5:['',Validators.required],
      candidatephoneno1:['',Validators.required],
      candidatephoneno2:['',Validators.required],
      candidatephoneno3:['',Validators.required],
      candidatephoneno4:['',Validators.required],
      candidatephoneno5:['',Validators.required],
      boothid:['',Validators.required],
      boothno:['',Validators.required],
      candidatecity1:['',Validators.required],
      candidatecity2:['',Validators.required],
      candidatecity3:['',Validators.required],
      candidatecity4:['',Validators.required],
      candidatecity5:['',Validators.required]

    })


  }

  partydetailsdata(FormValue:NgForm){
    this.api.partydetailsdata(FormValue).subscribe((data:any)=>{
      alert("Data was posted Succesfully");
      this.partydetails.reset();
    },rej=>{
      console.log("Error"+rej);
        });
        console.log(FormValue);
  
    }
  

}
