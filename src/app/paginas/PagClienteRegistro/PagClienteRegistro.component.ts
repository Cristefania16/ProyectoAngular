import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-PagClienteRegistro',
  templateUrl: './PagClienteRegistro.component.html',
  styleUrls: ['./PagClienteRegistro.component.css']
})
export class PagClienteRegistroComponent implements OnInit {

  clientes?: ClienteService;
  formulario!: FormGroup;
  tituloPagina= "Registro del cliente";
  cliente= {
    nombre: "",
    password: "",
    telefono: "",
    email: ""
  };
quiereContacto:boolean=false;
  
  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

goInicio():void{
  this._router.navigate(['/home']);
}

registrar(){
  alert("en construccion");
  this._router.navigate(['/vehiculo']);
}

}
