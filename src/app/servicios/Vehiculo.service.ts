import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/Vehiculo';
import { Observable, map, timeout } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = "https://www.epico.gob.ec/vehiculo/public/api/"

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getVehiculos(filtro?: string, rows?: number, page?: number): Observable<Vehiculo[]> {
    let body = new HttpParams();
    body = filtro ? body.set('filtro', filtro) : body;
    body = rows ? body.set('rows', rows) : body;
    body = page ? body.set('page', page) : body;
    return this.http.get<Respuesta>(this.baseUrl + "vehiculos/", { params: body }).pipe(
      map(respuesta => respuesta.data)
    );
  }

  insertVehiculo(vehiculo: Vehiculo) {
    return this.http.post<Respuesta>(this.baseUrl + "vehiculo/", vehiculo)
  }


  /*getVehiculos(filtro: any): Observable<Array<Vehiculo>>{
    const escucha: Observable<Array < Vehiculo >> = new Observable(escuchando => {
      let lista = this.listavehiculos.filter(elem => elem.marca.toLowerCase().includes(filtro.toLowerCase()))
      escuchando.next(lista);
    });
return escucha;
}*/


  getVehiculo(codigo: string) {
    return this.http.get<Respuesta>(this.baseUrl + "vehiculo/" + codigo);

  }

  actualizarVehiculo(vehiculo: Vehiculo, codigo: string) {
    return this.http.put<Respuesta>(this.baseUrl + "vehiculo/" + codigo, vehiculo, this.httpOptions);
  }

  eliminarVehiculo(codigo: string) {
    return this.http.delete<Respuesta>(this.baseUrl + "vehiculo/" + codigo);
  }

  addVehiculo(vehiculo: Vehiculo) {
    this.listavehiculos.push(vehiculo);
  }

  private listavehiculos: Array<any> = [
    { "codigo": "A0001", "marca": "CHEVROLET", "modelo": "ONIX", "foto": "https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2021-onix-sedan/mov/refresh-julio/intro/colorizer/2022-colorizer-onix-sedan-04.jpg?imwidth=420", "anio": 2024, "color": "gris", "kilometraje": 100, "precio": 25000, "calificacion": 1 },
    { "codigo": "A0002", "marca": "TOYOTA", "modelo": "HILUX", "foto": "https://www.toyotaguerrero.com.mx/assets-gral/imagenes/autos/hilux/color_autos/dispositivo/azul.png", "anio": 2015, "color": "azul", "kilometraje": 0, "precio": 35000, "calificacion": 2 },
    { "codigo": "A0003", "marca": "KIA", "modelo": "CERATO", "foto": "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/xl/RT_V_a68ca601f2ce4bb0ab937b22cd16c16f.webp", "anio": 2004, "color": "rojo", "kilometraje": 1000, "precio": 14000, "calificacion": 3 },
    { "codigo": "A0004", "marca": "MAZDA", "modelo": "SEDAN", "foto": "https://www.mazda.mx/siteassets/mazda-mx/mycos-2024/mazda3-sedan/configura/exteriores/i/mazda-mexico-mazda3-sedan-configura-i-41w-negro-celeste-v1.png?w=575", "anio": 2020, "color": "negro", "kilometraje": 300, "precio": 20000, "calificacion": 4 },
    { "codigo": "A0005", "marca": "HYUNDAI", "modelo": "ELANTRA", "foto": "https://acnews.blob.core.windows.net/imggallery/800x600/0_41_20100429215016402.jpg", "anio": 2024, "color": "gris", "kilometraje": 20, "precio": 25000, "calificacion": 5 }
  ]


}

export interface vehiculos {
  codigo: string;
  marca: string;
  modelo: string;
  anio: number;
  kilometraje: number;
  precio: number;
  calificacion: number;
}

export interface Respuesta {
  codigo: string;
  mensaje: string;
  data: Array<vehiculos> | Vehiculo | any;

}