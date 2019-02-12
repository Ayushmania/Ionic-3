import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ApiServiceProvider } from '../providers/api-service/api-service';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceProvider } from '../providers/book-service/book-service';
import { StudentServiceProvider } from '../providers/student-service/student-service';
import {Facebook} from '@ionic-native/facebook';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiServiceProvider,
    BookServiceProvider,
    StudentServiceProvider,
  Facebook
  ]
})
export class AppModule {}
