import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ItemDesc } from '../../interfaces/item-desc.interface';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  id: string;
  item: ItemDesc;

  constructor(
    private route: ActivatedRoute,
    private _service: ItemService
  ) {}

  ngOnInit() {
    this.route.params.subscribe( response => {
      this._service
          .getItem( response[ 'id' ] )
          .subscribe( ( item: ItemDesc ) => {
            this.id = response[ 'id' ];
            this.item = item;
          });
    });
  }

}
