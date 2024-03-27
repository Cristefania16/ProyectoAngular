import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import {  FormBuilder, FormGroup, Validators,ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';
import { Router } from '@angular/router';



@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup;
  constructor(
    private _router: Router,
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    
  ) {

    this.formulario = this.formBuilder.group({
      "codigo": ['', [Validators.required, validadorCodigo()]],
      "marca": ['', Validators.required],
      "modelo": ['', Validators.required],
      "anio": ['', Validators.required],
      "kilometraje": ['', Validators.required],
      "precio": ['', Validators.required],
      "calificacion": ['', Validators.required]
    });
  }

  ngOnInit() {
   
  }

  guardar() {

    if (this.formulario.valid) {
      this.vehiculoService.insertVehiculo({...this.formulario.value }).subscribe(respuesta => {
          if (respuesta.codigo == '1') {

            Swal.fire({
              title: "Mensaje",
              text: "Vehículo registrado con exito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
            }
            )

          } else {

            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar el vehiculo:" + respuesta.mensaje,
              icon: "error"
            })
          }
        }
      )

    } else {
      Swal.fire({
        title: "Mensaje",
        text: "Faltan llenar campos",
        icon: "error"
      })
    }

  }
  onBack():void{
    this._router.navigate(['/vehiculos/']);
  }

}

export function validadorCodigoComparativo(){
  return (Formulario: FormGroup): ValidationErrors | null => {
    let valor = Formulario.controls['codigo'].value;
    let valor2 = Formulario.controls['codigo_confirm'].value;
    if (valor===valor2) {
      return null;
    }
    return { 'codigoComparativo': true };
  }
}
