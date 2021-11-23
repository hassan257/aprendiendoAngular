import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'aprendiendoAngular';
  public mostrar_videojuegos: boolean = true;
  public descripcion: string = '';
  public fondo: string = 'white';
  public color: string = 'yellow';
  public config: any;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
    this.fondo = Configuracion.fondo;
    this.color = Configuracion.color;
  }
  ocultarVideojuegos(value: boolean){
    this.mostrar_videojuegos = value;
  }
}
