import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditBusinessCardComponent } from './edit-business-card/edit-business-card.component';
import { AddBusinessCardComponent } from './add-business-card/add-business-card.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'home', component: HomeComponent, canActivate: [ AuthGuardService ] },
  { path: 'edit/:userID/:cardID', component: EditBusinessCardComponent, canActivate: [ AuthGuardService ]  },
  { path: 'add', component: AddBusinessCardComponent, canActivate: [ AuthGuardService ]  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
