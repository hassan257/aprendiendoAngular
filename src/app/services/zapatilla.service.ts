import { Injectable} from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebook', 'Blanco', true),
            new Zapatilla('Reebook Spartan', 180, 'Reebook', 'Negras', true),
            new Zapatilla('Nike Runner MD', 60, 'Nike', 'Negras', true),
            new Zapatilla('Adidas Yeezy', 180, 'Adidas', 'Gris', false),
            new Zapatilla('Nike Airmax', 190, 'Nike', 'Rojas', false),
        ];
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas
    }
}