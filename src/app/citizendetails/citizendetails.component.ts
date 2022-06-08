import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ToastrserviceService } from '../toastrservice.service';

@Component({
  selector: 'app-citizendetails',
  templateUrl: './citizendetails.component.html',
  styleUrls: ['./citizendetails.component.css']
})
export class CitizendetailsComponent implements OnInit {

  alldata:any;
  object:any=[];
  adduser!:FormGroup;

  constructor(private api:ApiserviceService, private toastr:ToastrserviceService) { }

  ngOnInit(): void {

    this.api.getcitizendetailsdata().subscribe(data=>{
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
   

  //to delete the citizen details
  deletecitizendetail(data:any,data1:any){
    this.api.clearcitizendetails(data._id,data1._rev).subscribe(_res=>{
      location.reload();{
        this.toastr.showSuccess("SUCCESS",'Deleted Successfully')
      }
  

    });
}
}
