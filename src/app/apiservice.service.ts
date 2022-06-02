import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return  this.http.post<any>('http://localhost:8000/adminsignuplogin',formObject);
     
   }
   citizensignupdata(formObject:any){
    return  this.http.post<any>('http://localhost:8000/citizensignupdata',formObject);
     
   }

   citizenuserdata(formObject:any){
    return  this.http.post<any>('http://localhost:8000/citizenuserdata',formObject);
     
   }


   citizenuserlogin(){
    return this.http.get('http://localhost:8000/citizenuserlogin/');
  }
  citizenuserloginall(id:any){
    return this.http.get(`http://localhost:8000/citizenuserloginiall/${id}`);
  }

  adminuserlogin(){
    return this.http.get('http://localhost:8000/adminuserlogin');
  }

  partydetailsdata(formObject:any){
    return  this.http.post<any>('http://localhost:8000/partydetailsdata',formObject);
     
   }


   getcitizendetailsdata(){
    return this.http.get('http://localhost:8000/getcitizendetailsdata');
  }

  getpartdetailsdata(){
    return this.http.get('http://localhost:8000/getpartdetailsdata');
  }


  clearcitizendetails(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/clearcitizendetails/${id}/${id1}`);
  }

  clearpartydetails(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/clearpartydetails/${id}/${id1}`);
  }

  votecandidatedetails(){
    return this.http.get('http://localhost:8000/votecandidatedetailsforvote');
  }
 


}

