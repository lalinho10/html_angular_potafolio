import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppData } from '../interfaces/app-data.interface';

@Injectable({
  providedIn: 'root'
})

export class AppDataService {

  info: AppData = {};
  load: boolean = false;
  team: any[] = [];

  constructor( private http: HttpClient ) {
    this.getAppData();
    this.getTeamData();
  }

  private getAppData() {
    this.http
        .get( 'assets/data/app-data.json' )
        .subscribe( ( response: AppData ) => {
          this.info = response;
          this.load = true;
        });
  }

  private getTeamData() {
    this.http
        .get( 'https://angular-portafolio-ad054.firebaseio.com/equipo.json' )
        .subscribe( ( response: any ) => {
          this.team = response;
        });
  }

}
