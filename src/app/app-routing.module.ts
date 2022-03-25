import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormateurComponent } from './formateur/formateur.component';
import { GestionFormateurComponent } from './gestion-formateur/gestion-formateur.component';
import { GestionProfileComponent } from './gestion-profile/gestion-profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessParticipeFormationComponent } from './success-participe-formation/success-participe-formation.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'login',component:LoginComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'register',component:RegisterComponent},
  {path:'emailConfirmation',component:EmailConfirmationComponent},
  {path:'formateurs',component:GestionFormateurComponent},
  {path:'profile',component:GestionProfileComponent},
  {path:'apprenant',component:ApprenantComponent},
  {path:'detailFormation/:idFormation',component:DetailsFormationComponent},
  {path:'succesParticipeFormation',component:SuccessParticipeFormationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
