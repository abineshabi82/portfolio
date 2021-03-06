import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {
  baseUrl='https://my-json-server.typicode.com/abineshabi82/portfolio-json-server/';


  constructor(private http:HttpClient) { }

  getProfile(){
    return this.http.get(this.baseUrl+'profile');
  }
  
  getExperience(){
    return this.http.get(this.baseUrl+'experience');
  }

  getWork(){
    return this.http.get(this.baseUrl+'work');
  }
  
  getSkill(){
    return this.http.get(this.baseUrl+'skill');
  }
}
