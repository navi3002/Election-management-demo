import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { ToastrserviceService } from '../toastrservice.service';

@Component({
  selector: 'app-managecitizen-page',
  templateUrl: './managecitizen-page.component.html',
  styleUrls: ['./managecitizen-page.component.css']
})
export class ManagecitizenPageComponent implements OnInit {
  citizenuserpage!:FormGroup;
  value: boolean = true;
  data: any;
  object:any=[];
  alldata:any;
  val:any=[];


  constructor(private api:ApiserviceService, private fb:FormBuilder, private tostr:ToastrserviceService) { }

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
    this.tostr.showSuccess("Added",'Citizen Details Added Succesfully')
    this.citizenuserpage.reset();
  },rej=>{
    this.tostr.showError("Error",'Citizen Details not added')
    console.log("Error"+rej);
      });
      console.log(FormValue);

  }

  boothidChange(arg:any){
    console.log(arg.target.value);
    var target = arg.target.value;
    this.api.getboothidChange(target).subscribe((data) => {
      console.log(data);
      this.alldata = data;
      this.alldata = this.alldata.docs;
      console.log(this.alldata);

      for(const i of this.alldata) {
        console.log(i.boothno);
        this.val.push(i.boothno);
        this.citizenuserpage.controls['boothno'].setValue(i._id)
        this.object.push(i)
        this.tostr.showSuccess("Successfully",'Booth Number Matched Succesfully')
      }
      


    });

    console.log(this.object.boothno);
    
    
  }

 
}
