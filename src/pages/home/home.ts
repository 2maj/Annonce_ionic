import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FirebaseServiceProvider } from "../../providers/firebase-service/firebase-service";
import { FirebaseListObservable} from "angularfire2/database";
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import 'rxjs/add/operator/take';
import { AboutPage } from "../about/about";
import { FilesPage } from "../files/files";

/*
@IonicPage({
  name:'home',
  segment: 'quote/:id'
})
*/
@Component({
  selector: 'page-home',
  templateUrl: 'detail.html'
})
export class HomePage {
  quotes$: FirebaseListObservable<any[]>;
  googleUrl: string = 'http://google.cf';
  newQuote = '';
  constructor(public http: Http,
    public navCtrl: NavController,
    public firebaseService: FirebaseServiceProvider) {
    this.quotes$ = this.firebaseService.getQuotes();
  }
  navigateToHome(){
    this.navCtrl.setRoot(FilesPage);
  }
  addQuote(){
    this.firebaseService.addQuotes(this.newQuote);
  }
  showQuoteDetails(quote) {
    console.log('quote ', quote);
    this.navCtrl.setRoot(
      AboutPage,
      {
        'id' : quote.keys
      });
  }


}
