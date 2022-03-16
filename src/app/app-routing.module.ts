import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormateurComponent } from './formateur/formateur.component';
import { GestionFormateurComponent } from './gestion-formateur/gestion-formateur.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'formateur',component:FormateurComponent},
  {path:'login',component:LoginComponent},
  {path:'forbidden',component:ForbiddenComponent},
  {path:'register',component:RegisterComponent},
  {path:'emailConfirmation',component:EmailConfirmationComponent},
  {path:'formateurs',component:GestionFormateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
