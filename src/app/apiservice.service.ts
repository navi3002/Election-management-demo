import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private  http:HttpClient) {
   }

  loginCredentials:any;

  // AdminLogin

  adminuserlogin(){
    return this.http.get('http://localhost:8000/adminuserlogin');
  }

  // Managecitizenpage 
  
  citizenuserdata(formObject:any){
    return  this.http.post<any>('http://localhost:8000/citizenuserdata',formObject);  
   }

  getboothidChange(id:any){
    return this.http.get('http://localhost:8000/getboothidChange/'+id);
  }

  // Managepartypage

  partydetailsdata(formObject:any){
    return  this.http.post<any>('http://localhost:8000/partydetailsdata',formObject);  
   }


  //votecitizenpage

  votecandidatedetails(){
    return this.http.get('http://localhost:8000/votecandidatedetailsforvote');
  }

  getboothidChange1(id:any){
    return this.http.get('http://localhost:8000/getboothidChange1/'+id);
  }


  // Citizen Login

  citizenloginform(){
    return this.http.get('http://localhost:8000/citizenloginform');
  }


  // Manage Voting page

  getpartdetailsdatabooth1(){
    return this.http.get('http://localhost:8000/getpartdetailsdatabooth1');
  }

  getpartdetailsdatabooth2(){
    return this.http.get('http://localhost:8000/getpartdetailsdatabooth2');
  }

  getpartdetailsdatabooth3(){
    return this.http.get('http://localhost:8000/getpartdetailsdatabooth3');
  }

  votedDataList(){
    return this.http.get('http://localhost:8000/votedDataList/')
  }

  postVote(obj:any){
    return this.http.post('http://localhost:8000/postVote',obj)
    
  }
}

