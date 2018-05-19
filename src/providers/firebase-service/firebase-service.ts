import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class FirebaseServiceProvider {

  constructor(public afdb: AngularFireDatabase) {
    console.log('Hello FirebaseServiceProvider Provider');
  }
  getQuotes(){
    return this.afdb.list('/quotes/')
  }
  addQuotes(quote){
    this.afdb.list('/quotes/').push(quote);
  }
}
