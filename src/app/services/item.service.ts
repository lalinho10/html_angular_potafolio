import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Item } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  cargando: boolean = true;
  items: Item[] = [];
  itemsFilter: Item[] = [];

  constructor( private http: HttpClient ) {
    this.getItems();
  }

  private getItems() {

    return new Promise( ( resolve, reject ) => {

      this.http
          .get( 'https://angular-portafolio-ad054.firebaseio.com/productos_idx.json' )
          .subscribe( ( response: Item[] ) => {
            this.items = response;
            this.cargando = false;
            resolve();
          });

    });

  }

  public getItem( id: string ) {
    return this.http.get( `https://angular-portafolio-ad054.firebaseio.com/productos/${ id }.json` );
  }

  public searchItem( searchItem: string ) {
    if ( this.items.length === 0 ) {
      this.getItems().then( () => {
        this.filterItems( searchItem );
      });
    } else {
      this.filterItems( searchItem );
    }
  }

  private filterItems( textFilter: string ) {
    textFilter = textFilter.toLowerCase();

    this.itemsFilter = this.items.filter( item => {
      const catLC = item.categoria.toLowerCase();
      const titLC = item.titulo.toLowerCase();

      return ( catLC.indexOf( textFilter ) >= 0 || titLC.indexOf( textFilter ) >= 0 );
    });
  }
}
