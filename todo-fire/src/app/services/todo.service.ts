import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private firesotre: Firestore) {}

  getTodos() {
    //code to get all todos from firebase

    // /users
    const userCollectionRef = collection(this.firesotre, 'todos');
    const todoObservable = collectionData(userCollectionRef) as Observable<
      Todo[]
    >;
    return todoObservable;
  }

  getTodo(todoId:string){

  }

  addTodo(todo:Todo){

  }

  removeTodo(todoId:string){

  }

  updateTodo(todo:Todo, todoId:string){
    
  }

}

export interface Todo {
  content: string;
  images: string[];
  title: string;
  isCompleted: boolean;
}
