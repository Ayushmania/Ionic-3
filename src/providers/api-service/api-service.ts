import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
baseUrl:any;
data:any;
  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
    this.baseUrl="https://salty-lowlands-92793.herokuapp.com/teacher/";
  }
  loginCheck(em,pass){
  this.data= this.http.get(this.baseUrl+'findUser?email='+em+'&password='+pass)// user exist or not//http returning as an object
     return this.data;
   }
 addData(data){
   return this.http.post(this.baseUrl+'addData/',data)
 }

}
