import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-votecitizenpage',
  templateUrl: './votecitizenpage.component.html',
  styleUrls: ['./votecitizenpage.component.css']
})
export class VotecitizenpageComponent implements OnInit {

  alldata:any;
  object:any=[];

  constructor( private api:ApiserviceService) { }

  ngOnInit(): void {
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
    
    });
  }

}
