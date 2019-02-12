import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentServiceProvider } from '../../providers/student-service/student-service';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
name:any;
email:any;
password:any;
phoneNo:any;
dept:any;
idcol:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public studentService:StudentServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
studHome(){
  var data ={
    'name':this.name,
    'email':this.email,
    'phoneNo':this.phoneNo,
    'password':this.password,
    'dept':this.dept,
    'idcol':this.idcol
       }
       console.log(data);
       this.studentService.addData(data)
       .subscribe(res=>{
         this.navCtrl.setRoot("StudentPage");
       })
}
}
