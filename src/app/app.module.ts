import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpModule } from '@angular/http'; 


import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { MapaPage } from '../pages/mapa/mapa';
import { ListaPage } from '../pages/lista/lista';
import { DetallePage } from '../pages/detalle/detalle';
import { PruebaServiceProvider } from '../providers/prueba-service/prueba-service';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    MapaPage,
    ListaPage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    MapaPage,
    ListaPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PruebaServiceProvider
  ]
})
export class AppModule {}
