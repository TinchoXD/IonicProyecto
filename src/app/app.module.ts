import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SingupPage } from '../pages/singup/singup';
import {LoginPage} from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FormsModule } from '@angular/forms';
import {UsuarioService} from "../servicios/usuario.service";
import {HttpClientModule} from "@angular/common/http";
import {MainMenuPage} from '../pages/main-menu/main-menu';
import {IngresoCodigoPage} from '../pages/ingreso-codigo/ingreso-codigo';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SingupPage,
    LoginPage,
    MainMenuPage,
    IngresoCodigoPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SingupPage,
    LoginPage,
    MainMenuPage,
    IngresoCodigoPage
  ],
  providers: [  //Servicios
    UsuarioService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
