import { NgModule } from '@angular/core';
import { PagListaVehiculosComponent } from './PagListaVehiculos/PagListaVehiculos.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilitariosModule } from '../utilitarios/UtilitariosModule';
import { PagVehiculoComponent } from './PagVehiculo/PagVehiculo.component';
import { RouterModule } from '@angular/router';
import { PagVehiculoRegistroComponent } from './PagVehiculoRegistro/PagVehiculoRegistro.component';
import { PagVehiculoDetalleComponent } from './PagVehiculoDetalle/PagVehiculoDetalle.component';
import { PagClienteRegistroComponent } from './PagClienteRegistro/PagClienteRegistro.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
  
    ],
    declarations: [
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagVehiculoDetalleComponent,
        PagClienteRegistroComponent
    ],
    exports: [
        PagListaVehiculosComponent,
        PagVehiculoComponent,
        PagVehiculoRegistroComponent,
        PagVehiculoDetalleComponent,
        PagClienteRegistroComponent
    ]
  })
  export class PaginaModule { }
  