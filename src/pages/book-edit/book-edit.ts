import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';

/**
 * Generated class for the BookEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-edit',
  templateUrl: 'book-edit.html',
})
export class BookEditPage {
book:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController , public bookService: BookServiceProvider) {
    this.book=this.navParams.get('book');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookEditPage');
  }
submit(){
  console.log(this.book);
  this.bookService.updateData(this.book)
    .subscribe(res=>{
      this.navCtrl.setRoot("AddPage");
    })
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
