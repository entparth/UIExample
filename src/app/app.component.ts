import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
 import * as firebase from 'firebase';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { HomePage } from '../pages/home/home';
//import { SignupPage } from '../pages/signup/signup';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, public splashScreen: SplashScreen, public fireData:FirebaseProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initializeFirebaseApp();
      
    });
  }
  initializeFirebaseApp() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBb2crDDkTJVeVIVrvPWNolTl3zQADZQlE",
      authDomain: "uiproject-508dc.firebaseapp.com",
      databaseURL: "https://uiproject-508dc.firebaseio.com",
      projectId: "uiproject-508dc",
      storageBucket: "",
      messagingSenderId: "740618100266"
    };
    firebase.initializeApp(config);
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      // console.log('user details ', user)

      if (!user) {
        this.splashScreen.hide();
        this.rootPage = HomePage;


      }

      
    });
  }

}

