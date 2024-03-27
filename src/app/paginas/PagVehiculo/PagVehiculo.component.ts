import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculo',
  templateUrl: './PagVehiculo.component.html',
  styleUrls: ['./PagVehiculo.component.css']
})

export class PagVehiculoComponent implements OnInit {
  vehiculo?: Vehiculo;
  formulario!: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private vehiculoService: VehiculoService,
    private formBuilder:FormBuilder,
    
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
    this.route.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params['codigo']).subscribe(data => {
        if(data.codigo=='1'){
          this.vehiculo = data.data;
          this.formulario.controls['codigo'].setValue(this.vehiculo?.codigo);
          this.formulario.controls['marca'].setValue(this.vehiculo?.marca);
          this.formulario.controls['modelo'].setValue(this.vehiculo?.modelo);
          this.formulario.controls['anio'].setValue(this.vehiculo?.anio);
          this.formulario.controls['kilometraje'].setValue(this.vehiculo?.kilometraje);
          this.formulario.controls['precio'].setValue(this.vehiculo?.precio);
          this.formulario.controls['calificacion'].setValue(this.vehiculo?.calificacion);
        }else{
          Swal.fire({
            title: "Mensaje",
            text: "No se pudo cargar la información",
            icon: "error"
          })
        }
        
      });
    });

   
  }

guardar(){
  if(this.formulario.valid){
    this.vehiculoService.actualizarVehiculo({...this.formulario.value}, this.formulario.controls['codigo'].value).subscribe(data =>{
        if(data.codigo=='1'){
          
        Swal.fire({
          title: "Mensaje",
          text: "Vehículo actualizado con exito",
          icon: "info"
        });
      }else{
        Swal.fire({
          title: "Mensaje",
          text: "No se pudo actualizar:" + data.mensaje,
          icon: "info"
        });
      }
      });
  }else{
    Swal.fire({
      title: "Mensaje",
      text: "Faltan llenar campos",
      icon: "error"
    });
  }
}

onBack():void{
  this._router.navigate(['/vehiculos/']);
}

}
