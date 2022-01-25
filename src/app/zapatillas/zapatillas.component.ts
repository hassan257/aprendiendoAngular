import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaService } from "../services/zapatilla.service";

@Component({
    selector: 'zapatillas',
    templateUrl: './zapatillas.component.html',
    providers: [
        ZapatillaService
    ]
})
export class ZapatillasComponent implements OnInit{
    public titulo: string = 'Componente de Zapatillas';
    public zapatillas: Array<Zapatilla>;
    public marcas: String[] = [];
    public color: string;
    public mi_marca: string = '';

    constructor(
        private _zapatillaService: ZapatillaService
    ){
        this.marcas = new Array();
        this.color = 'yellow';
        this.zapatillas = _zapatillaService.getZapatillas()
    }
    ngOnInit(){
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, indice) => {
            if(this.marcas.indexOf(zapatilla.marca) < 0){
                this.marcas.push(zapatilla.marca);
            }
            console.log(indice);
        });
        console.log(this.marcas);
    }

    getMarca(){
        alert(this.mi_marca);
    }
    
    addMarca(){
        this.marcas.push(this.mi_marca);
    }

    borrarMarca(index: number){
        this.marcas.splice(index, 1);
    }

    onBlur(){
        console.log("Has salido");
    }

    mostrarPalabra(){
        alert(this.mi_marca);
    }
}