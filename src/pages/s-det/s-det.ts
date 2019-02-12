import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SDetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-s-det',
  templateUrl: 's-det.html',
})
export class SDetPage {
book:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book=this.navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SDetPage');
  }

}
