import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresoCodigoPage } from './ingreso-codigo';

@NgModule({
  declarations: [
    IngresoCodigoPage,
  ],
  imports: [
    IonicPageModule.forChild(IngresoCodigoPage),
  ],
})
export class IngresoCodigoPageModule {}
