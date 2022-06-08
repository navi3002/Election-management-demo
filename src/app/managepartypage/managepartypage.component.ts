import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ApiserviceService,  } from '../apiservice.service';
import { ToastrserviceService } from '../toastrservice.service';

@Component({
  selector: 'app-managepartypage',
  templateUrl: './managepartypage.component.html',
  styleUrls: ['./managepartypage.component.css']
})
export class ManagepartypageComponent implements OnInit {
partydetails!:FormGroup;
  constructor(private api:ApiserviceService, private fb:FormBuilder, private toastr:ToastrserviceService) { }
  

  ngOnInit(): void {

    this.partydetails = this.fb.group({
      partyname1:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      partyname2:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      partyname3:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      partyname4:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      partyname5:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      candidatename1:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      candidatename2:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      candidatename3:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      candidatename4:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      candidatename5:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      candidatephoneno1:['',[Validators.required,Validators.pattern('[789][0-9]{9}]')]],
      candidatephoneno2:['',[Validators.required,Validators.pattern('[789][0-9]{9}]')]],
      candidatephoneno3:['',[Validators.required,Validators.pattern('[789][0-9]{9}]')]],
      candidatephoneno4:['',[Validators.required,Validators.pattern('[789][0-9]{9}]')]],
      candidatephoneno5:['',[Validators.required,Validators.pattern('[789][0-9]{9}]')]],
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
    this.api.partydetailsdata(FormValue).subscribe((_data:any)=>{
      this.toastr.showSuccess("Success",'Party details added')
      alert("Data was posted Succesfully");
      this.partydetails.reset();
    },rej=>{
      this.toastr.showError("error",'party details not added ')
      console.log("Error"+rej);
        });
        console.log(FormValue);
  
    }
  

}
