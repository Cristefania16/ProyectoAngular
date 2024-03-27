import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaVehiculos',
  templateUrl: './PagListaVehiculos.component.html',
  styleUrls: ['./PagListaVehiculos.component.css']
})
export class PagListaVehiculosComponent implements OnInit {

  mostrarImagen = true;
  //filtro: string = "";

  /*private _filtro: string = "";*/
  public rows: number = 10;
  public page: number = 1;
  public filtro: string = "";

  /*get filtro() {
    return this._filtro;
  }

  set filtro(data: string) {
    this._filtro = data;
    this.consultarVehiculo();
  }*/


  @Input() valor: string = "";
  listaVehiculos: Array<any> = [];



  constructor(
    private vehiculoService: VehiculoService
  ) {


  }

  ngOnInit() {
    this.consultarVehiculo();


  }

  mostrar() {
    this.mostrarImagen = !this.mostrarImagen
  }

  /*consultaVehiculos() {
    this.vehiculoService.getVehiculos(this.filtro).subscribe(data => {
      this.listaVehiculos = data;
    });
  }*/

  recepcion(dato: number) {
    console.log('Dato:', dato)
  }

  consultarVehiculo() {
    this.vehiculoService.getVehiculos(this.filtro, this.rows, this.page).subscribe(respuesta => {
      console.log(respuesta);
      this.listaVehiculos = respuesta;
    })
  }


  eliminar(codigo: string) {
    Swal.fire({
      title: "Estas seguro que deseas eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Si",
      cancelButtonText: "No",
      icon: "question"

    }).then((res) => {
      if (res.isConfirmed) {
        this.vehiculoService.eliminarVehiculo(codigo).subscribe(data => {
          if (data.codigo == '1') {
            this.consultarVehiculo();
            Swal.fire({
              title: "Mensaje",
              text: "Vehículo eliminado con exito",
              icon: "success"
            });
          } else {
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo eliminar el registro:" + data.mensaje,
              icon: "error"
            });
          }
        });
      }
    }
    )
  }


}
