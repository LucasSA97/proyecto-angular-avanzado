import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Results } from '../models/randomUser';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`Ocurrio el error: ${error.error}`)
    } else {
      console.error(`Error en el backend: ${error.status}. El error es ${error.error}`)
    }
    return throwError(()=> new Error('Algo ha salido mal')
     )
  }

  obtenerRandomContact(): Observable<any>{

    return this.http.get('https://randomuser.me/api').pipe(
      retry(2),  //Numero de reintentos de peticiones antes de sacar un error por si algo falla
      catchError(this.handleError ) //Sacamos el error 
    )

  }



  obtenerRandomContacts(n: number, sexo?: string) : Observable<Results> { 

    let params: HttpParams = new HttpParams().set("results", n)

    if (sexo) {
      params = params.append("gender", sexo)
    }

     return this.http.get<Results>('https://randomuser.me/api' , {params: params} ).pipe(
      retry(2),  //Numero de reintentos de peticiones antes de sacar un error por si algo falla
      catchError(this.handleError ) //Sacamos el error 
    )
   }
  
  
}
