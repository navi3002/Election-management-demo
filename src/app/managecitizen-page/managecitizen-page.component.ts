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
  maxDate:any;


  constructor(private api:ApiserviceService, private fb:FormBuilder, private tostr:ToastrserviceService) { }

  ngOnInit(): void {

    this.citizenuserpage = this.fb.group({
      citizenname:['',[Validators.required,Validators.pattern('[A-Za-z]*[0-9]*[A-Za-z]')]],
      citizenemail:['',[Validators.required,Validators.pattern('[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]')]],
      citizenadhaar:['',[Validators.required,Validators.pattern('[0-9]{4}[0-9]{4}[0-9]{4}')]],
      dob:['',Validators.required],
      phonenumber:['',[Validators.required,Validators.pattern('[789][0-9]{9}]')]],
      boothid:['',Validators.required],
      boothno:['',Validators.required],
      citizenadress:['',Validators.required],
      citizencity:['',Validators.required],
      citizenstate:['',Validators.required]

    });
     this.setDate();
 }
citizenuser(FormValue:NgForm){
  this.api.citizenuserdata(FormValue).subscribe((_data:any)=>{
    this.tostr.showSuccess("Added",'Citizen Details Added Succesfully')
    this.citizenuserpage.reset();
  },rej=>{
    this.tostr.showError("Error",'Citizen Details not added')
    console.log("Error"+rej);
      });
      console.log(FormValue);

  }

  setDate(){
    let date = new Date();
    let currentDate:any = date.getDate();
    let currentMonth:any = date.getMonth() + 1;
    let currentYear:any = date.getFullYear();
    if (currentDate < 10){
      currentDate = "0" + currentDate;
    }
    if(currentMonth < 10){
      currentMonth = "0" + currentMonth;
    }
    this.maxDate = currentYear-18 + "-" + currentMonth + "-" + currentDate;
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
