import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public _service: ItemService
  ) {}

  ngOnInit() {
    this.route.params.subscribe( searchData => {
      this._service.searchItem( searchData[ 'item' ] );
    });
  }

}
