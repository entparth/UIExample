import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  id:any;
  albumId:any;
  thumbnailUrl:any;
  title:any;
  date:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.albumId=this.navParams.get('albumId');
    this.thumbnailUrl = this.navParams.get('thumbnailUrl')
    this.title = this.navParams.get('title')
    this.date=this.navParams.get('date')

    console.log("all the data is===>", this.id, this.albumId, this.thumbnailUrl, this.title,this.date);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');
  }

}
