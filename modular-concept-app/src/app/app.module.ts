import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './modules/shared/shared.module';
// Importing Angular Material Button Module
import { MaterialModule } from './modules/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from "./components/card/card.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    CommonModule,
    FormsModule,
    MaterialModule,
    CardComponent
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
