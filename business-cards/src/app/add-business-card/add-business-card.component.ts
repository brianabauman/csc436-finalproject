import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BusinessCard } from '../business-card.model';
import { BusinessCardService } from '../business-card.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-add-business-card',
  templateUrl: './add-business-card.component.html',
  styleUrls: ['./add-business-card.component.css']
})
export class AddBusinessCardComponent implements OnInit {
  addBusinessCardForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cardsService: BusinessCardService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.addBusinessCardForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        emailAddress: ['', Validators.required],
        company: ['', Validators.required],
        additionalInfo: ['']
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addBusinessCardForm.controls; }

  onSubmit() {
      // stop here if form is invalid
      if (this.addBusinessCardForm.invalid) {
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

      this.cardsService.addCard(this.authService.userID, card);
      this.router.navigate(['home']);
  }
}
