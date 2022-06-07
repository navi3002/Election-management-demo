import { APP_INITIALIZER, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { /*document why this constructor is empty */   } 

  ngOnInit(): void {
    console.log(apzal)
  }
}
function apzal(_apzal: any) {
  throw new Error('Function not implemented.');
}

