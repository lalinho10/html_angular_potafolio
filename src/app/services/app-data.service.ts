import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppData } from '../interfaces/app-data.interface';

@Injectable({
  providedIn: 'root'
})

export class AppDataService {

  info: AppData = {};
  load: boolean = false;

  constructor( private http: HttpClient ) {

    this.http
        .get( 'assets/data/app-data.json' )
        .subscribe( ( response: AppData ) => {
          this.info = response;
          this.load = true;
        });

  }

}
