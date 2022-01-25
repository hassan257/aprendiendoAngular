import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string = '';
  public followers: number = 0;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.nombre = params.nombre
      this.followers = +params.followers
      console.log(params);
      if(this.nombre == 'ninguno'){
        this._router.navigate(['/home']);
      }
    })
  }

  redirigir():void{
    console.log('redirigiendo...');
    this._router.navigate(['/zapatillas']);
  }

}
