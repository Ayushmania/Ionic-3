import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
book:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bookService: BookServiceProvider,public modalCtrl:ModalController) {
  this.book=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
editBook(){
  this.navCtrl.push("BookEditPage",{book :this.book})
}
deleteBook(){
  this.bookService.deleteData(this.book._id)
  .subscribe(res=>{
    this.navCtrl.setRoot("AddPage");
  })
}
}
