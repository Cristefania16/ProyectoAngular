import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagListaVehiculosComponent } from './paginas/PagListaVehiculos/PagListaVehiculos.component';
import { PagHomeComponent } from './paginas/PagHome/PagHome.component';
import { PagNotFoundComponent } from './paginas/PagNotFound/PagNotFound.component';
import { PagVehiculoComponent } from './paginas/PagVehiculo/PagVehiculo.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { PagVehiculoDetalleComponent } from './paginas/PagVehiculoDetalle/PagVehiculoDetalle.component';
import { PagClienteRegistroComponent } from './paginas/PagClienteRegistro/PagClienteRegistro.component';

const routes: Routes = [

  {
    path: "home",
    component: PagHomeComponent

  },

  {
    path: "vehiculos",
    component: PagListaVehiculosComponent

  },

  {
    path: "vehiculo",
    component: PagVehiculoRegistroComponent

  },

  {
    path: "vehiculos/:codigo",
    component: PagVehiculoDetalleComponent

  },

  {
    path: "vehiculo/:codigo",
    component: PagVehiculoComponent

  },

  {
    path: "clientes",
    component: PagClienteRegistroComponent

  },

  {
    path: "",
    component: PagListaVehiculosComponent,
    pathMatch: "full"

  },

  {
    path: "**",
    component: PagNotFoundComponent,
    pathMatch: "full"

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
