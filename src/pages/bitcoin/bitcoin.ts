import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  result1:any=[];
  result2: any = [];
  result3: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BitcoinPage');
  }
  fetchData()
  {
    let url = 'https://min-api.cryptocompare.com/data/exchange/histohour?tsym=USD&limit=70';
    this.http.get(url).map(res => res.json()).subscribe(
      data => {
        this.result1.push(data); 
        // for (let index = 0 < this.result1.length; index++)
        //   const element = this.result1[index];
        
        
        console.log("0thh dta==>",this.result1)
        
        
       
      })
  }

}

