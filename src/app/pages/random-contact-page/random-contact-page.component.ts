import { Component, OnInit } from '@angular/core';
import { IRandomContact, Results } from 'src/app/models/randomUser';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-contact-page',
  templateUrl: './random-contact-page.component.html',
  styleUrls: ['./random-contact-page.component.css']
})
export class RandomContactPageComponent implements OnInit {


 contact: IRandomContact | undefined;

  constructor(private randomUserService: RandomUserService) { }

    ngOnInit(): void {

    this.randomUserService.obtenerRandomContact().subscribe((response: Results) => {
      this.contact = response.results[0]
    })
   }
  
  obtenerNuevoContact() {
    this.randomUserService.obtenerRandomContact().subscribe(
      {
        next: (response: Results) => {
          this.contact = response.results[0];
        },
        error: (error) => console.error(`${error}`),
        complete: ()=> console.info('Peticion de random contact terminada')
      
      }
    )
  }


  obtenerListaContacts(n: number) {
    this.randomUserService.obtenerRandomContacts(n).subscribe(
      {
        next:(response: Results) => {
          console.log(response);
        },
        error: (error) => console.error(`${error}`),
        complete: ()=> console.info('Peticion de random contact terminada')
      
      }
    )

  }


}
