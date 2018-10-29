import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { EmailValidator } from '../../validators/emailvalidator';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user: { name: any, email: any, contact: any, password: any};
  secondForm:any;
  allData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder:FormBuilder,public fireData:FirebaseProvider) {
    this.initializepage();
  }
  initializepage()
  {
  this.secondForm = this.formBuilder.group({
    name: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
    contact: ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]    

  })
}
  signupMessage()
  {
    if (!this.secondForm.valid) {
      
    }
    else {
      this.fireData.signupData(this.secondForm.value.name, this.secondForm.value.email, this.secondForm.value.contact,this.secondForm.value.password).then((data) => {
        console.log(this.secondForm.value.email, this.secondForm.value.password);
        this.allData = data;
        console.log("alldata inside signup", this.allData);
        this.navCtrl.setRoot(HomePage, { Email: this.secondForm.value.email })
      }).catch((error) => {
        console.log(error);        
      })
  }
}
goToLogin()
{
  this.navCtrl.push(LoginPage)
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
