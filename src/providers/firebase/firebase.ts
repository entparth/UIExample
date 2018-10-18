import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor() {
    console.log('Hello FirebaseProvider Provider');
  }
  signupData(name: any, email: any, contact: any, password: any)
{
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((newUser) => {
      console.log("New Created user Data===",newUser);
      
      resolve(newUser);
     
    }).catch((error) => {
      console.log('Error getting location', error);
      reject(error);
      
    });

  });
}
  loginData(email: string, password: string) {
    return new Promise((resolve, reject) => {
      return firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
        console.log(data);
       
      
        resolve(data);
      }).catch(function (error) {
        if (error) {
          
          var errorMessage = error.message;
          console.log('error on sign in ', errorMessage)
          reject(error);
        } else {
          resolve(error);
        }
      });
    });
  }
}
