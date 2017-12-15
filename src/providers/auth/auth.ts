import { Injectable } from '@angular/core';

import { AngularFireAuth } from "angularfire2/auth";
import { usercreds } from "../../models/interfaces/usercred";

@Injectable()
export class AuthProvider {

  constructor(public fireauth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) =>{
      this.fireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(()=> {
        resolve(true);
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }
}
