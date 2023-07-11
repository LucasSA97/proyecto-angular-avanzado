import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { IRandomContact } from 'src/app/models/randomUser';

@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.css']
})
export class ContactsDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IRandomContact | undefined;
  filtroPrevio: string = 'todos';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: any) => {
        if (params.id) {
          this.id = params.id
        }
      }
    );


    //Veremos el estado del contacto
    if (history.state.data) {
      this.contacto = history.state.data;
    }
    if (history.state.filtro) {
      this.filtroPrevio = history.state.filtro;
    }


  }
  

}
