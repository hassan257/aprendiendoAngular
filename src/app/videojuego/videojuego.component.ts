import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;
    constructor(){
        this.titulo = 'Componente de Videojuegos';
        this.listado = 'Listado de los juegos mas populares';
        // console.log("Se ha cargado el componente: videojuego.component.ts");
    }
    ngOnDestroy(): void {
        // console.log('OnDestroy ejecutado');
    }
    ngDoCheck(): void {
        // console.log('DoCheck ejecutado');
    }
    ngOnInit(): void {
        // console.log('OnInit ejecutado');
    }
    cambiarTitulo(){
        this.titulo = 'Nuevo titulo del componente';
    }
}