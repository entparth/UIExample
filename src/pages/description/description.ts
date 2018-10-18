import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  data:any;
  id:number;
  albumId:number;
  thumbnailUrl:string;
  title:string;
  date:any;
  //result:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl:LoadingController) {
    this.id = this.navParams.get('result');
    this.albumId=this.navParams.get('albumId');
    this.thumbnailUrl = this.navParams.get('thumbnailUrl')
    this.title = this.navParams.get('title')
    this.date=this.navParams.get('date')
    // this.waiForData();
    console.log("all the data is===>", this.id, this.albumId, this.thumbnailUrl, this.title,this.date);
    
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

}
