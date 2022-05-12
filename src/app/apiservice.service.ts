import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
  constructor(private  http:HttpClient) {
   }
   getconnecting(){
   return this.http.get('http://localhost:8000/dashboard');
   }
}