import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilesPage } from './perfiles';
import { ListaPage } from '../lista/lista';
//import { PruebaServiceProvider } from '../../providers/prueba-service/prueba-service';

@NgModule({
  declarations: [
    PerfilesPage,
    ListaPage
  ],
  imports: [
    IonicPageModule.forChild(PerfilesPage),
  ],
  exports: [
    PerfilesPage,
    ListaPage
  ]
})
export class PerfilesPageModule {}
