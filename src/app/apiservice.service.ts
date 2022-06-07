import { ComponentFactoryResolver, Injectable } from '@angular/core';
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

  loginCredentials:any;

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

  getpartdetailsdatabooth3(){
    return this.http.get('http://localhost:8000/getpartdetailsdatabooth3');
  }

  getpartdetailsdata(){
    return this.http.get('http://localhost:8000/getpartydetailsdata');
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

  citizenloginform(){
    return this.http.get('http://localhost:8000/citizenloginform');
  }

  getboothidChange(id:any){
    var booth = {
        selector:{
          "boothid":id,
          "type":"boothdata"
        }
    }
    return this.http.get('http://localhost:8000/getboothidChange/'+id);
  }
  getboothidChange1(id:any){
    var booth = {
        selector:{
          "boothid":id,
          "type":"boothdata"
        }
    }
    return this.http.get('http://localhost:8000/getboothidChange1/'+id);
  }
  // postVote(obj:any){
  //   return this.http.put('http://localhost:8000/vote/',obj)
  // }
  getVote(){
    return this.http.get('http://localhost:8000/getVote/')
  }
  postVote(obj:any){
 
  return this.http.post('http://localhost:8000/postVote',obj)
  
}
votedDataList(){
  return this.http.get('http://localhost:8000/votedDataList/')
}


}

