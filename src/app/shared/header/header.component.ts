import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public _service: AppDataService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  searchData( data: string ) {
    if ( data.length <= 0 ) {
      return;
    }

    this.router.navigate( [ '/search', data ] );
  }
}
