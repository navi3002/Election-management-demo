import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  
  constructor(private  http:HttpClient) {
   }
  //  getconnecting(){
  //  return this.http.get('http://localhost:8000/dashboard');
  //  }
   logindata(formObject:any){
    return  this.http.post<any>('http://localhost:8000/dashboard',formObject);
     
   }
}
