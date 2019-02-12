import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
name:any;
author:any;
publisher:any;
paper:any;
desc:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public bookService:BookServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookPage');
  }
  bookadd(){
    var data ={
      'name':this.name,
      'publisher':this.publisher,
      'paper':this.paper,
      'author':this.author,
      'desc':this.desc
         }
         console.log(data);
      this.bookService.addData(data)
        .subscribe(res=>{
          this.navCtrl.setRoot("AddPage");
        })
  }
}
