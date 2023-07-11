import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})

  
export class ContactsPageComponent implements OnInit {

  cargando: boolean = true;
  filtroSexo: string = 'todos';
  listaRandomContacts: IRandomContact[] = [];

  
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private randomUserService: RandomUserService) { }

  ngOnInit(): void {


    //Obtenemos los query params
    this.route.queryParams.subscribe((params:any) => {
      console.log('QueryParam:', params.sexo)
      if (params.sexo) {
        this.filtroSexo = params.sexo
        if (params.sexo === 'female' || params.sexo === 'male') {

          this.randomUserService.obtenerRandomContacts(10, params.sexo).subscribe(
            {
              next: (response: Results) => {
                response.results.forEach((randomContact: IRandomContact, index: number) => {
                  this.listaRandomContacts.push(randomContact)
                })
                console.log(this.listaRandomContacts)
               
              },
              error: (error) => console.error(`${error}`),
              complete: () => {

                console.info('Peticion de random contact terminada');
                 this.cargando = false;
              }
          
            }
          )
        } else {
          //Implementacion para obtener la lista de contactos aleatoria
          this.randomUserService.obtenerRandomContacts(10).subscribe(
            {
              next: (response: Results) => {
                response.results.forEach((randomContact: IRandomContact, index: number) => {
                  this.listaRandomContacts.push(randomContact)
                })
                console.log(this.listaRandomContacts)
              },
              error: (error) => console.error(`${error}`),
              complete: () => {
                console.info('Peticion de random contact terminada');
                 this.cargando = false;
              }
          
            }
          )
        }
      }


      //Obtenemos la lista de contactos
      // this.contactService.obtenerContactos(this.filtroSexo).then(
      //   (lista) => this.listaContactos = lista)
      //   .catch((error) => console.error(`Hubo un error: ${error}`))
      // .finally(()=> console.info('Peticion terminada'))
   
   
      
    })

  }

  
  volverAHome(contacto: IRandomContact) {

    let navigationExtras: NavigationExtras = {
      state: {
        data: contacto,       
      }
    }

    this.router.navigate(['/dashboard'], navigationExtras )
  }




}
