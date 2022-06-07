import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizenmainpage',
  templateUrl: './citizenmainpage.component.html',
  styleUrls: ['./citizenmainpage.component.css']
})
export class CitizenmainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('login');
  }
}
