import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BusinessCardComponent } from './business-card/business-card.component';
import { EditBusinessCardComponent } from './edit-business-card/edit-business-card.component';
import { BusinessCardListComponent } from './business-card-list/business-card-list.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    BusinessCardComponent,
    EditBusinessCardComponent,
    BusinessCardListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'my-app-name'),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
