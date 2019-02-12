import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service/api-service';
import { Facebook,FacebookLoginResponse} from '@ionic-native/facebook';

/**
 * Generated class for the TeacherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacher',
  templateUrl: 'teacher.html',
})
export class TeacherPage {
email:any;
password:any;
userData=null;
  constructor(public navCtrl: NavController, public navParams: NavParams,public apiService:ApiServiceProvider,public alertCtrl:AlertController,private facebook:Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherPage');
  }

sign(){
  if(this.email && this.password)
  {
    this.apiService.loginCheck(this.email,this.password)
      .subscribe(res=>{

     if(res.message){
      let alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Email Or Password Is Wrong ',
        buttons: ['OK']
      });
      alert.present();
          }
     else{
           this.navCtrl.push("AddPage");
         }
    })
   }
    else
    {
      let alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Email Or Password Is Not Given ',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  loginWithFB(){
    this.facebook.login(['Email','public_profile']).then((response: FacebookLoginResponse)=>{
      this.facebook.api('me?fields=id,name,Email,first_name,picture.width(720.height(720).as(picture_large)',[]).then(profile=>{
        this.userData={ Email: profile['Email'],first_name:profile['first_name'],picture: profile['picture_large']['data']['url'],username :profile['name']}
      })
    })
  }
}
