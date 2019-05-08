import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  cargando: boolean = true;
  items: Item[] = [];

  constructor( private http: HttpClient ) {
    this.getItems();
  }

  private getItems() {
    this.http
        .get( 'https://angular-portafolio-ad054.firebaseio.com/productos_idx.json' )
        .subscribe( ( response: Item[] ) => {
          this.items = response;
          this.cargando = false;
        });
  }
}
