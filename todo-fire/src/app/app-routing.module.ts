import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTodosComponent } from './components/list-todos/list-todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list-todo',
    component: ListTodosComponent,
    title: 'List Todos',
  },
  {
    path: 'add-todo',
    component: AddTodoComponent,
    title: 'Add Todo',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About Todo Fire',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact us',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
