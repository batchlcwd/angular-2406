import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const firebaseConfig = {
  apiKey: 'AIzaSyBAodM4Agk56MWzFaE4Ap1ZbDmawDBs3Nw',
  authDomain: 'todo-app-a143d.firebaseapp.com',
  projectId: 'todo-app-a143d',
  storageBucket: 'todo-app-a143d.firebasestorage.app',
  messagingSenderId: '195342656896',
  appId: '1:195342656896:web:da030ef9d892f71dc08d65',
};

@NgModule({
  declarations: [
    AppComponent,
    ListTodosComponent,
    AddTodoComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
