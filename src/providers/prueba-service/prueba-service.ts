import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PruebaServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PruebaServiceProvider {

  constructor(public http: Http) {
    console.log('Hello PruebaServiceProvider Provider');
  }

  getProfilesId(){
  	return this.http.get('https://api.myjson.com/bins/w076v')
  	.map(res=>res.json());
  	//.subscribe(data=>{
  		//console.log( data);
  	//});
  }

}
