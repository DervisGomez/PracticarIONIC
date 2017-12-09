import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListaPage } from '../lista/lista';
import { PruebaServiceProvider } from '../../providers/prueba-service/prueba-service';


@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ PruebaServiceProvider ],
})
export class PerfilesPage {
  public users: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ps: PruebaServiceProvider
  ) {
    this.users =[];
  }

  goToLista(userId){
  	this.navCtrl.push(ListaPage,{userID: userId});
  }

  ionViewDidLoad() {
    this.ps.getProfilesId().subscribe(usersIDs=>{
      usersIDs.map(use=>{
        this.users.push(use);
      });
      
      //console.log(usersIDs);
    });
    console.log('ionViewDidLoad PerfilesPage');
  }

}
