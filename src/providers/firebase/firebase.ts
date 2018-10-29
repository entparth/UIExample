import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as _ from "lodash";

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
    //   firebase.database().ref('/Users').child(newUser.uid).set({
    //     email: email,
    //     Name: name,
        
    //     uid: newUser.uid,
    //     password: password,
    //     contact:contact
        
      

    //   });
    //   resolve(newUser);
     
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    //   reject(error);
      
    });

  });
}
getAppData()
{
  
    return new Promise((resolve, reject) => {
      var dbRef = firebase.database().ref('/users/')
      dbRef.on('value', (users) => {
        var allUserData = _.toArray(users.val());
        console.log("All Users data=", allUserData);
        
        
        resolve(allUserData);
      })
    }).catch((error) => {
      console.log(error);
    })
  
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
  forgotPassword(email) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then((data) => {
        // console.log(data);
        resolve({ sucess: true });
      }).catch((err) => {
        console.log(err);
        reject(err);
      })
    })

  }
}
