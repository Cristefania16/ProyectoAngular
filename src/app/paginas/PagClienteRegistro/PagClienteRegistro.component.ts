import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagClienteRegistro',
  templateUrl: './PagClienteRegistro.component.html',
  styleUrls: ['./PagClienteRegistro.component.css']
})
export class PagClienteRegistroComponent implements OnInit {


  formulario: FormGroup;
  

  /*tituloPagina= "Registro del cliente";
  cliente= {
    nombre: "",
    password: "",
    telefono: "",
    email: ""
  };
quiereContacto:boolean=false;*/

  constructor(
    private readonly clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {

    this.formulario = this.formBuilder.group({
      "id": ['', Validators.required],
      "nombre": ['', Validators.required],
      "apellido": ['', Validators.required],
      "password": [''],
      "correo": [''],
      "telefono": ['']
    });
  }

  ngOnInit() {
  }

  goInicio(): void {
    this._router.navigate(['/home']);
  }

  /*registrar() {
    let cliente = {...this.formulario.value};
    this.clienteService.insertCliente(cliente).subscribe(data => {
      this._router.navigate(['/vehiculo']);
      console.log('Data:', data);
      if (!data) {
        Swal.fire(
          {
            title: "Mensaje",
            text: "Error al guardar",
            icon: "error"
          }
        );
        return;

      }
    });
    console.log('Formulario', this.formulario.value);

    //alert("en construccion");

  }*/


  registrar() {

    if (this.formulario.valid) {
      this.clienteService.insertCliente({...this.formulario.value }).subscribe(respuesta => {
          if (respuesta.codigo == '1') {
            this._router.navigate(['/vehiculo']);
            Swal.fire({
              title: "Mensaje",
              text: "Cliente registrado con exito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
            }
            )
  
          } else {
  
            Swal.fire({
              title: "Mensaje",
              text: "No se pudo registrar el cliente:" + respuesta.mensaje,
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
  
  


}



