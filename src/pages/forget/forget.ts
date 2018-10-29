import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';

import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {
  public forgotPasswordForm;
  error: boolean = false;
  errorMsg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public fireData:FirebaseProvider,public formBuilder:FormBuilder,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }
  submit() {
    this.fireData.forgotPassword(this.forgotPasswordForm.value.email).then((data) => {
      console.log(data);
      this.createAlert();
    }).catch((error) => {
      console.log(error);
      this.error = true;
      this.errorMsg = error;
    })
  }

  createAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success!',
      subTitle: 'Reset Email has been send',
      message: 'Check your email',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        }
      ]
    })
    alert.present();
    this.navCtrl.push(LoginPage);
  }
  initializeForm() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
    })
  }
}

  



