import { Component, OnInit } from '@angular/core';

import { BusinessCard } from '../business-card.model';

@Component({
  selector: 'app-business-card-list',
  templateUrl: './business-card-list.component.html',
  styleUrls: ['./business-card-list.component.css']
})
export class BusinessCardListComponent implements OnInit {
  cards: BusinessCard[]

  constructor() { 
    const card1 = new BusinessCard();
    card1.firstName = "Hansel";
    card1.lastName = "Hanson";
    card1.emailAddress = "hansel@hansonbuttfactory.com";
    card1.phoneNumber = "(123) YES-BUTT";
    card1.company = "Hanson's Butt Factory";

    const card2 = new BusinessCard();
    card2.firstName = "Gretel";
    card2.lastName = "Hanson";
    card2.emailAddress = "gretel@hansonbuttfactory.com";
    card2.phoneNumber = "(123) YES-BUTT";
    card2.company = "Hanson's Butt Factory";

    const card3 = new BusinessCard();
    card3.firstName = "Marquise";
    card3.lastName = "Hanson";
    card3.emailAddress = "marquise@hansonbuttfactory.com";
    card3.phoneNumber = "(123) YES-BUTT";
    card3.company = "Hanson's Butt Factory";

    this.cards = [];
    this.cards.push(card1);
    this.cards.push(card2);
    this.cards.push(card3);
  }

  ngOnInit() {
  }

}
