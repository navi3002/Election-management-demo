import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  contactus!:FormGroup

  constructor( private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contactus = this.fb.group({
      enteryourname:['',Validators.required],
      email:['',Validators.required],
    })
  }

}
