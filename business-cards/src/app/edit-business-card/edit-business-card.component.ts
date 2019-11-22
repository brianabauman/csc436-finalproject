import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-business-card',
  templateUrl: './edit-business-card.component.html',
  styleUrls: ['./edit-business-card.component.css']
})
export class EditBusinessCardComponent implements OnInit {
  editBusinessCardForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editBusinessCardForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        emailAddress: ['', Validators.required],
        company: ['', Validators.required],
        additionalInfo: ['', Validators.required]
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
  }
}
