import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-managevotingpage',
  templateUrl: './managevotingpage.component.html',
  styleUrls: ['./managevotingpage.component.css']
})
export class ManagevotingpageComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
alldata:any;
object:any=[];
store:any;
flag=0;
formvalue:any;
vote:any;

  ngOnInit(): void {
   {
      this.api.votedDataList().subscribe((data:any)=>{
      console.log(data);
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


      this.api.getpartdetailsdatabooth3().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alldata=data;
        this.formvalue=data;
        console.log(this.formvalue)
        this.alldata=this.alldata.docs[0];
        console.log(this.alldata);
        this.store=[{candidate:this.alldata.candidatename1,party:this.alldata.partyname1},
          {candidate:this.alldata.candidatename2,party:this.alldata.partyname2},
          {candidate:this.alldata.candidatename3,party:this.alldata.partyname3},
          {candidate:this.alldata.candidatename4,party:this.alldata.partyname4},
          {candidate:this.alldata.candidatename5,party:this.alldata.partyname5}]
          for(const i  of this.object){
            console.log(i);

            if(i.candidatename == this.formvalue.canditatename1 && i.partyname == this.formvalue.partyname1){
              this.flag = 1;
              
              
            
              // this.api.loginCredentials=i;
              // localStorage.setItem("login",JSON.stringify(this.api.loginCredentials));
              
          }
      }
          
      



      
      });

 

}
}
