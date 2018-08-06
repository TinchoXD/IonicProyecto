import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MainMenuPage} from '../main-menu/main-menu';

/**
 * Generated class for the IngresoCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingreso-codigo',
  templateUrl: 'ingreso-codigo.html',
})
export class IngresoCodigoPage {

  mainMenu = MainMenuPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresoCodigoPage');
  }

}
