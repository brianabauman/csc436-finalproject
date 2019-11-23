import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BusinessCard } from '../business-card.model';
import { BusinessCardService } from '../business-card.service';

@Component({
  selector: 'app-edit-business-card',
  templateUrl: './edit-business-card.component.html',
  styleUrls: ['./edit-business-card.component.css']
})
export class EditBusinessCardComponent implements OnInit {
  userID: string;
  cardID: string;
  card: BusinessCard;
  editBusinessCardForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private cardsService: BusinessCardService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params["userID"];
      this.cardID = params["cardID"];
    });

    this.card = this.cardsService.getCard(this.userID, this.cardID);
    console.log("card: " + this.card.emailAddress);

    this.editBusinessCardForm = this.formBuilder.group({
        firstName: [this.card.firstName, Validators.required],
        lastName: [this.card.lastName, Validators.required],
        phoneNumber: [this.card.phoneNumber, Validators.required],
        emailAddress: [this.card.emailAddress, Validators.required],
        company: [this.card.company, Validators.required],
        additionalInfo: [this.card.additionalInfo, Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.editBusinessCardForm.controls; }

  onSubmit() {
      // stop here if form is invalid
      if (this.editBusinessCardForm.invalid) {
          return;
      }

      console.log(this.f.firstName.value + ", " + 
        this.f.lastName.value + ", " + 
        this.f.phoneNumber.value + ", " + 
        this.f.emailAddress.value + ", " + 
        this.f.company.value + ", " + 
        this.f.additionalInfo.value);

      let card = new BusinessCard();
      card.firstName = this.f.firstName.value;
      card.lastName = this.f.lastName.value;
      card.phoneNumber = this.f.phoneNumber.value;
      card.emailAddress = this.f.emailAddress.value;
      card.company = this.f.company.value;
      card.additionalInfo = this.f.additionalInfo.value;

      this.cardsService.updateCard(this.userID, this.cardID, card);
  }
}
