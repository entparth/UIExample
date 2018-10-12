import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HttpClientModule } from '@angular/common/http';
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
 date2Var:any;
 flag:boolean=false;
 title:string;
 thumbnailUrl:string;
 albumId:any;
 id:any;

  constructor(public navCtrl: NavController,public http: Http ) {
      this.dateVar = moment().format("MMM Do YY");
      this.date2Var = moment().endOf('day').fromNow();
  }
  descr()
  {
    console.log("Going to description page");
    this.navCtrl.push(DescriptionPage,{title:this.title,thumbnailUrl:this.thumbnailUrl,albumId:this.albumId,id:this.id,date:this.date2Var})
  }
  goToApi()
  { this.flag=true;
     let data:Observable<any>;
      let url = 'https://jsonplaceholder.typicode.com/photos';
      this.http.get(url).map(res=>res.json()).subscribe(
        data=>{
          this.result=data;
            console.log(this.result);      
        }
      )
    console.log("haha");
   // this.navCtrl.push({ApiExPage});
  }
}
