import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-managevotingpage',
  templateUrl: './managevotingpage.component.html',
  styleUrls: ['./managevotingpage.component.css']
})
export class ManagevotingpageComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
alldata:any;
alldata1:any;
alldata2:any;
object:any=[];
store:any;
flag=0;
formvalue:any;
vote:any;
ADMK:any=0;
DMK:any=0;
KGF:any=0;
NGK:any=0;
NOTA:any=0;
ADMK1:any=0;
DMK1:any=0;
KGF1:any=0;
NGK1:any=0;
NOTA1:any=0;
ADMK2:any=0;
DMK2:any=0;
KGF2:any=0;
NGK2:any=0;
NOTA2:any=0;


  ngOnInit(): void {
   {
     console.log("before api");
      
  console.log("after api");
    this.boothThreeCount();
  setTimeout(() => {
    for(const j of this.object){
      if(j.partyname == "ADMK" && j.canditatename=='AJAYPRASATH' && j.boothno == "Booth 3"){
        this.ADMK++;
      }else if(j.partyname == "DMK" && j.canditatename=='RAMESH' && j.boothno == "Booth 3") {
        this.DMK++;
      }else if(j.partyname == "NGK" && j.canditatename=='RAJU' && j.boothno == "Booth 3") {
        this.NGK++;
      }else if(j.partyname == "KGF" && j.canditatename=='KARTHI' && j.boothno == "Booth 3") {
        this.KGF++;
      }else if(j.partyname == "NOTA" && j.canditatename=='NOTA' && j.boothno == "Booth 3") {
        this.NOTA++;
      }
      else if(j.partyname == "ADMK" && j.canditatename=='MAHESH' && j.boothno == "Booth 1"){
        this.ADMK1++;
      }
      else if(j.partyname == "DMK" && j.canditatename=='RAJESH' && j.boothno == "Booth 1") {
        this.DMK1++;
      }else if(j.partyname == "NGK" && j.canditatename=='STALIN' && j.boothno == "Booth 1") {
        this.NGK1++;
      }else if(j.partyname == "KGF" && j.canditatename=='LAKSHMANA' && j.boothno == "Booth 1") {
        this.KGF1++;
      }else if(j.partyname == "NOTA" && j.canditatename=='NOTA' && j.boothno == "Booth 1") {
        this.NOTA1++;
      }
      else if(j.partyname == "ADMK" && j.canditatename=='SUBASH' && j.boothno == "Booth 2"){
        this.ADMK2++;
      }
      else if(j.partyname == "DMK" && j.canditatename=='AKASH' && j.boothno == "Booth 2") {
        this.DMK2++;
      }else if(j.partyname == "NGK" && j.canditatename=='STALIN' && j.boothno == "Booth 2") {
        this.NGK2++;
      }else if(j.partyname == "KGF" && j.canditatename=='GANDHI' && j.boothno == "Booth 2") {
        this.KGF2++;
      }else if(j.partyname == "NOTA" && j.canditatename=='NOTA' && j.boothno == "Booth 2") {
        this.NOTA2++;
      }
    }
    console.log("ADMK",this.ADMK);
    console.log("DMK",this.DMK);
    console.log("KGF",this.KGF);
    console.log("NGK",this.NGK);
    console.log("NOTA",this.NOTA);
  
  },1000);
  
      }
      
      this.api.getpartdetailsdatabooth1().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alldata1=data;
        this.formvalue=data;
        console.log(this.formvalue)
        this.alldata1=this.alldata1.docs[0];
        console.log(this.alldata1);
        this.store=[{candidate:this.alldata1.candidatename1,party:this.alldata1.partyname1},
          {candidate:this.alldata1.candidatename2,party:this.alldata1.partyname2},
          {candidate:this.alldata1.candidatename3,party:this.alldata1.partyname3},
          {candidate:this.alldata1.candidatename4,party:this.alldata1.partyname4},
          {candidate:this.alldata1.candidatename5,party:this.alldata1.partyname5}]
      });

      this.api.getpartdetailsdatabooth2().subscribe(data=>{
        console.log(data);
        console.log('Data was fetching');
        this.alldata2=data;
        this.formvalue=data;
        console.log(this.formvalue)
        this.alldata2=this.alldata2.docs[0];
        console.log(this.alldata2);
        this.store=[{candidate:this.alldata2.candidatename1,party:this.alldata2.partyname1},
          {candidate:this.alldata2.candidatename2,party:this.alldata2.partyname2},
          {candidate:this.alldata2.candidatename3,party:this.alldata2.partyname3},
          {candidate:this.alldata2.candidatename4,party:this.alldata2.partyname4},
          {candidate:this.alldata2.candidatename5,party:this.alldata2.partyname5}]
      });



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
      });
}

boothThreeCount(){
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
}
