import {Component, OnInit} from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {UsuarioService} from "../../servicios/usuario.service";
import {SingupPage} from '../singup/singup';
import {MainMenuPage} from '../main-menu/main-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  singUp = SingupPage;
  menuPrincipal = MainMenuPage;

  nombre = "";
  password = "";
  passwordConfirmacion = "";
  duracionToast = 3000;
  posicionToast = 'top';

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              private _usuarioService: UsuarioService
  ) {
  }

  ngOnInit() {
    console.log(this._usuarioService.nombreUsuario);
  }


  validarFormulario(formulario: NgForm) {
    // console.log(formulario);
    console.log(this._usuarioService.nombreUsuario);


    this._usuarioService.nombreUsuario = 'Pepita';

    if (formulario.controls.password.value === // form
      this.passwordConfirmacion) { // ngModel
      // OK!
    } else {
      this.mostrarToast('Los passwords deben de ser iguales');
      this.password = "";
      this.passwordConfirmacion = "";
    }
  }

  mostrarToast(mensaje: string) {
    const toast = this.toastCtrl
      .create({
        message: mensaje,
        duration: this.duracionToast, // 3000
        position: this.posicionToast // 'top'
      });
    toast.present();
  }

}
