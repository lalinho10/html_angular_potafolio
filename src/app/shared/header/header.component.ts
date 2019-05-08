import { Component, OnInit } from '@angular/core';

import { AppDataService } from '../../services/app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _service: AppDataService ) {}

  ngOnInit() {
  }

}
