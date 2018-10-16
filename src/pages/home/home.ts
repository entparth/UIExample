import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';  
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import * as moment from 'moment';
import { DescriptionPage } from '../description/description';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 result:any=[];
 dateVar:any;
  publishedAt:any;
 flag:boolean=false;
 title:string;
urlToImage:string;
 content:any;
 id:any;
 author:any;

  constructor(public navCtrl: NavController,public http: Http ) {
      this.dateVar = moment().format("MMM Do YY");
    this.publishedAt = moment().endOf('day').fromNow();
  }
  descr()
  {
    console.log("Going to description page");
    this.navCtrl.push(DescriptionPage, { title: this.title, thumbnailUrl: this.urlToImage, albumId: this.content, id: this.id, date: this.publishedAt})
  }
  goToApi()
  { this.flag=true;
   //  let data:Observable<any>;
    let url = 'https://newsapi.org/v2/everything?q=bitcoin&from=2018-09-16&sortBy=publishedAt&apiKey=3edbc9e434524fab8448d243ae058b8b';
      this.http.get(url).map(res=>res.json()).subscribe(
        data=>{
          this.result=data;
            console.log(this.result);     
            
        }
      )
    console.log("haha");
   
  }
}
