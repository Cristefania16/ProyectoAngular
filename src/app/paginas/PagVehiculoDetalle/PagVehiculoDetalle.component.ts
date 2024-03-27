import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/Vehiculo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';

@Component({
  selector: 'app-PagVehiculoDetalle',
  templateUrl: './PagVehiculoDetalle.component.html',
  styleUrls: ['./PagVehiculoDetalle.component.css']
})
export class PagVehiculoDetalleComponent implements OnInit {
  vehiculo?: Vehiculo;
  formulario!: FormGroup;


  constructor(
    private _router:Router,
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder:FormBuilder
  ) { 

    this.formulario = this.formBuilder.group({
      "codigo": [''],
      "marca": [''],
      "modelo": [''],
      "anio": [''],
      "kilometraje": [''],
      "precio": [''],
      "calificacion": ['']
    });

  }

  ngOnInit() {
    this.vehiculoService;
  }

  onBack():void{
    this._router.navigate(['/vehiculos/']);
  }

}




