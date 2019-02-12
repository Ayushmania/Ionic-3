import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BookServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookServiceProvider {
baseUrl:any;
  constructor(public http: HttpClient) {
    console.log('Hello BookServiceProvider Provider');
    this.baseUrl="https://salty-lowlands-92793.herokuapp.com/book/";
  }
  addData(data){
    return this.http.post(this.baseUrl+'addData/',data)
  }
  getData(){

    return this.http.get(this.baseUrl+'getData/')
  }
  updateData(book){
    return this.http.put(this.baseUrl+'updateData/'+book._id,book)
  }
  deleteData(id){
    return this.http.delete(this.baseUrl+'deleteData/'+id)
  }
}
