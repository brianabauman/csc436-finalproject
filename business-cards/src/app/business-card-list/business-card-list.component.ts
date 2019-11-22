import { Component, OnInit } from '@angular/core';

import { BusinessCard } from '../business-card.model';

@Component({
  selector: 'app-business-card-list',
  templateUrl: './business-card-list.component.html',
  styleUrls: ['./business-card-list.component.css']
})
export class BusinessCardListComponent implements OnInit {
  cards: BusinessCard[]

  constructor() { }

  ngOnInit() {
  }

}
