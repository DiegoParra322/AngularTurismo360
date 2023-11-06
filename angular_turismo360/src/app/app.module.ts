import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ActivitiesGridComponent } from './activities-grid/activities-grid.component';
import { NavBarLoginComponent } from './nav-bar-login/nav-bar-login.component';
import { NavBarRegisterComponent } from './nav-bar-register/nav-bar-register.component';
import { ExperiencesGridComponent } from './experiences-grid/experiences-grid.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivitiesGridComponent,
    NavBarLoginComponent,
    NavBarRegisterComponent,
    ExperiencesGridComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
