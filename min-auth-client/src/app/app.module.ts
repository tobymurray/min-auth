import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { UserService } from './shared/user/user.service';
import { AuthenticatedGuard } from './shared/authenticated.guard';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
