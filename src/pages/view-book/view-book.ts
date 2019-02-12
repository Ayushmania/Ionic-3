import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';

/**
 * Generated class for the ViewBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-book',
  templateUrl: 'view-book.html',
})
export class ViewBookPage {
datas:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public bookService: BookServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewBookPage');
    this.getInfos();
  }
  getInfos()
  {
  this.bookService.getData()
    .subscribe(res=>{
   	this.datas=res;
     })
  }
  toDetail(data){
    this.navCtrl.push("SDetPage",{data: data});
}
}
