import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {
	public userID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.userID =this.navParams.get('userID');
  	console.log(this.userID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaPage');
  }

}
