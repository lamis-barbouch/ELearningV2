import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { FormateurComponent } from './formateur/formateur.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { GestionFormateurComponent } from './gestion-formateur/gestion-formateur.component';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormationAdminComponent } from './formation-admin/formation-admin.component';
import { HeaderApprenantComponent } from './header-apprenant/header-apprenant.component';
import { FooterComponent } from './footer/footer.component';
import { GestionProfileComponent } from './gestion-profile/gestion-profile.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { DetailsFormationComponent } from './details-formation/details-formation.component';
import { SuccessParticipeFormationComponent } from './success-participe-formation/success-participe-formation.component';
import { HeaderFormateurComponent } from './header-formateur/header-formateur.component';
import { JitsiComponent } from './jitsi/jitsi.component';
import { ForumComponent } from './forum/forum.component';
import { AddForumComponent } from './add-forum/add-forum.component';
import { ForumAdminComponent } from './forum-admin/forum-admin.component';
import { DictionaireForumComponent } from './dictionaire-forum/dictionaire-forum.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    FormateurComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    RegisterComponent,
    GestionFormateurComponent,
    EmailConfirmationComponent,
    FormationAdminComponent,
    HeaderApprenantComponent,
    FooterComponent,
    GestionProfileComponent,
    ApprenantComponent,
    DetailsFormationComponent,
    SuccessParticipeFormationComponent,
    HeaderFormateurComponent,
    JitsiComponent,
    ForumComponent,
    AddForumComponent,
    ForumAdminComponent,
    DictionaireForumComponent,
    HeaderAdminComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
