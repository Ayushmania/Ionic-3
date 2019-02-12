import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {//root page
datas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookService:BookServiceProvider ) {
    this.getInfos();
  }
  getInfos()
  {
  this.bookService.getData()
    .subscribe(res=>{
   	this.datas=res;
     })
  }
adding(){
this.navCtrl.push("BookPage");
}

goToDetail(data){
  this.navCtrl.push("DetailPage",{data: data});
}
}