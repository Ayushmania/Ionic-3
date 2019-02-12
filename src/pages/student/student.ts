import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { StudentServiceProvider } from '../../providers/student-service/student-service';

/**
 * Generated class for the StudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student',
  templateUrl: 'student.html',
})
export class StudentPage {
  datas:any;
email:any;
password:any;  
  constructor(public navCtrl: NavController, public navParams: NavParams,public studentService: StudentServiceProvider,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentPage');
    this.getInfo();
  }
  getInfo(){
    this.studentService.getData()
    .subscribe(res=>{
   	this.datas=res;
     })
  }
  signIn(){
    if(this.email && this.password)
    {
      this.studentService.loginCheck(this.email,this.password)
        .subscribe(res=>{
  
       if(res.message){
         let alert = this.alertCtrl.create({
        title: 'ERROR!',
        subTitle: 'Email or Password Is Wrong',
        buttons: ['OK']
            });
               alert.present();
            }
       else{
             this.navCtrl.push("ViewBookPage");
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

reg(){
  this.navCtrl.push("RegisterPage");
}
}
