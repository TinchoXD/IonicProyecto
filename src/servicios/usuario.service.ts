import {EventEmitter, Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {

  cambioNombreUsuario:EventEmitter<string> = new EventEmitter();

  emitirCambioNombreUsuario(nombreUsuario: string) {
    this.nombreUsuario = nombreUsuario;
    this.cambioNombreUsuario.emit(nombreUsuario);
  }

  nombreUsuario = 'Adrian';

  // static sumarDosNumeros(numeroUno: number, numeroDos: number) {
  //   return numeroUno + numeroDos;
  // }

  sumarDosNumeros(numeroUno: number, numeroDos: number) {
    return numeroUno + numeroDos;
  }


}

// UsuarioService.sumarDosNumeros()
