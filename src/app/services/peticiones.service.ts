import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class PeticionesService{
    public url: String;
    constructor(
        public _http: HttpClient
    ){
        this.url = "https://reqres.in/";
    }

    getUser(userId: string | undefined): Observable<any>{
        return this._http.get(this.url + 'api/users/' + userId);
    }
}