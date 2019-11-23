import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private authService: AuthService
  ) {
      //redirect to home if already logged in
      if (this.authService.user) { 
        console.log(this.authService.user);
      }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f_login() { return this.loginForm.controls; }
  get f_register() { return this.registerForm.controls; }

  onLoginSubmit() {
      // stop here if form is invalid
      if (this.loginForm.invalid) { return; }
      console.log(this.f_login.email.value + ", " + this.f_login.password.value);
      this.authService.login(this.f_login.email.value, this.f_login.password.value);
  }

  onRegisterSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) { return; }
    console.log(this.f_register.email.value + ", " + this.f_register.password.value);
    this.authService.register(this.f_register.email.value, this.f_register.password.value);
}
}
