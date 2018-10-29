import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/emailvalidator';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { HomePage } from '../home/home';
import {SignupPage} from '../signup/signup';
import { ForgetPage } from '../forget/forget';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm:any;
  valuePage:any;
  error: boolean = false;
  errorTwo: boolean = false;
  errorTwoMsg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,public fireData:FirebaseProvider) {
    this.valuePage='login'
  this.initializeForm();
  }
  initializeForm() {
    this.loginForm= this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])]

    })
  }
  goToSignup()
  {
    // this.navCtrl.push(SignupPage);
    this.navCtrl.setRoot(SignupPage);
  }
  forgot()
  {
    this.navCtrl.push(ForgetPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    if (!this.loginForm.valid) {
      console.log("fill fields first");
    }
    else {
      this.fireData.loginData(this.loginForm.value.email, this.loginForm.value.password).then((data) => {
        console.log(this.loginForm.value.email, this.loginForm.value.password);
        this.navCtrl.setRoot(HomePage);
      }).catch((error) => {
        console.log(error);
        
      })

    }

}
}
