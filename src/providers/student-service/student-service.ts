import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the StudentServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StudentServiceProvider {
baseUrl:any;
data:any;
  constructor(public http: HttpClient) {
    console.log('Hello StudentServiceProvider Provider');
  this.baseUrl="https://salty-lowlands-92793.herokuapp.com/student/";
  }
  loginCheck(email,password){
    this.data=this.http.get(this.baseUrl+'findUser?email='+email+'&password='+password)
  return this.data;
  }
  addData(data){
    return this.http.post(this.baseUrl+'addData/',data)
  }
  getData()
  {
    return this.http.get(this.baseUrl+'getData/')
  }
}
