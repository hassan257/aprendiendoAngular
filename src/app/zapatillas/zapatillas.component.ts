import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html'
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de Zapatillas';

    public zapatillas: Array<Zapatilla>;

    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebook', 'Blanco', true),
            new Zapatilla('Nike Runner MD', 60, 'Nike', 'Negras', true),
            new Zapatilla('Adidas Yeezy', 180, 'Adidas', 'Gris', false),
            new Zapatilla('Nike Airmax', 190, 'Nike', 'Rojas', false),
        ];
    }
    ngOnInit(){
        console.log(this.zapatillas);
    }
}