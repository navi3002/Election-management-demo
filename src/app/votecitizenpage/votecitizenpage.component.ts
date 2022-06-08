import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { ToastrserviceService } from '../toastrservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-votecitizenpage',
  templateUrl: './votecitizenpage.component.html',
  styleUrls: ['./votecitizenpage.component.css']
})
export class VotecitizenpageComponent implements OnInit {

  alldata:any;
  object:any=[];
  partydetails:any;
  vote:any;
  voteValue:number=0;
  disable:boolean=false;
  storeres:any;
  store:any;
 
  constructor( private api:ApiserviceService,private toastr:ToastrserviceService, private router:Router) { }

  ngOnInit(): void {
    this.store=[];
    this.api.votecandidatedetails().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.docs;
      console.log(this.alldata);
     
      for(const i of this.alldata){
            this.object.push(i);
            console.log('Fetched successfuly in add component');
        
  
      }
      this.disable=false;
    
    });
    let parsed:any=localStorage.getItem('login');
    this.partydetails=JSON.parse(parsed);
    console.log(this.partydetails);
    console.log('loginCredentials');
    console.log(this.partydetails);
    console.log(this.partydetails.boothno);

    this.api.getboothidChange1(this.partydetails.boothno).subscribe(data=>{
      console.log(data);
      this.partydetails=data;
      this.partydetails = this.partydetails.docs[0];
      console.log(this.partydetails);
      this.store=[{candidate:this.partydetails.candidatename1,party:this.partydetails.partyname1},
        {candidate:this.partydetails.candidatename2,party:this.partydetails.partyname2},
        {candidate:this.partydetails.candidatename3,party:this.partydetails.partyname3},
        {candidate:this.partydetails.candidatename4,party:this.partydetails.partyname4},
        {candidate:this.partydetails.candidatename5,party:this.partydetails.partyname5}]

    })
    console.log(this.vote);
  

  }
  voteDMK(canditatename:any,partyname:any,status:any,boothno:any){
    this.disable=true;
    this.toastr.showSuccess("Succesfully",'Voted')
    this.voteValue=this.voteValue+1;
    console.log(canditatename);
    console.log(partyname);
    console.log(boothno);
    console.log(status);

    let voteData={
      canditatename:canditatename,
      partyname:partyname,
      status:status,
      boothno:boothno,
      type:"votedList"

    };
    setTimeout(() => {
      this.router.navigate(['/managecandidate']);
    }, 1000);
    this.api.postVote(voteData).subscribe((data)=>{
      console.log(data); 
    });
  }
  
}
