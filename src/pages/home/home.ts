import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import * as moment from 'moment';
import { DescriptionPage } from '../description/description';
import * as _ from 'underscore'; 
import { BitcoinPage } from '../bitcoin/bitcoin';
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
 title1:any=[];
 like:number=2;
 view:number=2;
 comment:number=1;
 commentFlag:boolean=false;
 

  constructor(public navCtrl: NavController,public http: Http ) {
      this.dateVar = moment().format("MMM Do YY");
      this.date2Var = moment().endOf('day').fromNow();
      
  }
  getLike()
  {
    this.like++;
  }
  getView(id: number, albumId: numberp,title:string,thumbnailUrl:string,date:any)
  {
    this.view++;
    console.log("going to description page");
    this.navCtrl.push(DescriptionPage, { title: title, thumbnailUrl: thumbnailUrl, albumId: albumId, id: id, date: date });


  }
  getComment()
  {
    this.commentFlag = true;
    
  }
  descr()
  {
    console.log("Going to description page");
    this.navCtrl.push(DescriptionPage,{title:this.title,thumbnailUrl:this.thumbnailUrl,albumId:this.albumId,id:this.id,date:this.date2Var})
  }
  setComment()
  {
    this.commentFlag = false;
    this.comment++;
  }
  goTobit()
  {
    this.navCtrl.push(BitcoinPage);
  }
  goToApi()
  { this.flag=true;
     
      let url = '../../assets/json/dummy.json';
      this.http.get(url).map(res=>res.json()).subscribe(
        data=>{
          this.result=data;
            console.log(this.result); 
          this.getTrimTitle(this.result)  ;
           for (let i = 0; i < this.result.length; i++) {
             this.getTrimTitle(this.result[i].title);
             const element = this.result;
             console.log("title stripped first",element);
            //  let j = element[i].title.indexOf(' ');
            //  console.log("space location=>",j)
            //   var splitT=element[i].title.substr(0,j);
            //  console.log("first word=>", splitT)
           
           
            //  this.result.push(splitT);
             console.log("title stripped third", element);
            //this.result[i].push(element)
            //  console.log("title stripped fourth", this.result);
          console.log("array of trimmed titles",this.title1 )
           }
        }
      )
    console.log("haha");
   // this.navCtrl.push({ApiExPage});
  }
  getTrimTitle(title:string)
  {
    // let j = title.indexOf(' ');
    // this.title1.push(title.substr(0,j))  ; 
    
   

  }
}
