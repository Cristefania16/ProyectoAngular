import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  insertCliente(clientes: ClienteService) {
    return this.http.post<Respuesta>(this.baseUrl + "cliente/", clientes, this.httpOptions)
  }

}

export interface Cliente {
  id: number;
  nombre: string;
  apellido: string;
  password: string;
  correo: string;
  telefono: number;

}

export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<Cliente> | Cliente | any;

}