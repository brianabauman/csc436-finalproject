import { Component, OnInit } from '@angular/core';

import { BusinessCard } from '../business-card.model';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css']
})
export class BusinessCardComponent implements OnInit {
  card: BusinessCard;

  constructor() { 
    this.card = new BusinessCard();
    this.card.firstName = "Hansel";
    this.card.lastName = "Hanson";
    this.card.emailAddress = "butts@hansonbuttfactory.com";
    this.card.phoneNumber = "(123) YES-BUTT";
    this.card.company = "Hanson's Butt Factory";
  }

  ngOnInit() {
  }

}
