import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,NgForm,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-partydetails',
  templateUrl: './partydetails.component.html',
  styleUrls: ['./partydetails.component.css']
})
export class PartydetailsComponent implements OnInit {

  alldata:any;
  object:any=[];
  constructor(private api:ApiserviceService) { }

  ngOnInit(): void {
    this.api.getpartdetailsdata().subscribe(data=>{
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

  deletepartydetail(data:any,data1:any){
    this.api.clearpartydetails(data._id,data1._rev).subscribe(res=>{
      // alert('Your data was Deleted from the database');
      location.reload();
    });
}

}
