import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ngRouting';
  token: string | null = null

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }
  
  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login'])
  }

}


//Paso de informacion entre componentes:
//1. A traves de @Inputs y @Outputs
//2. A traves de inyeccion de constructores de componentes hijos @ViewChild. etc
//3. A traves de Serrvicios (Promesas y Observables,etc)->NGRX(gestion del estado de la app)
//4. A traves de parametros de rutas
