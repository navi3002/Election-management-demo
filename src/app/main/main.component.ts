import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("constructor");
  }

}
