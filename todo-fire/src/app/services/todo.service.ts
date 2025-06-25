import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { from, map } from 'rxjs';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentSnapshot,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private firesotre: Firestore) {}

  getTodos() {
    //code to get all todos from firebase

    // /users
    const todoCollectionRef = collection(this.firesotre, 'todos');
    const todoObservable = collectionData(todoCollectionRef, {
      idField: 'id',
    }) as Observable<Todo[]>;
    return todoObservable;
  }

  // getTodo(todoId: string): Observable< Todo | null > {
  //   const todoDocRef = doc(this.firesotre, `todos/${todoId}`);
  //   return from(getDoc(todoDocRef)).pipe(
  //     map((item: DocumentSnapshot) => {
  //       if (item.exists()) {
  //         const todo = item.data() as Todo;
  //         return { ...todo, id: item.id };
  //       } else {
  //         return null;
  //       }
  //     })
  //   );
  // }
  getTodo(todoId: string): Observable<Todo> {
    const todoDocRef = doc(this.firesotre, `todos/${todoId}`);
    return docData(todoDocRef, {
      idField: 'id',
    }) as Observable<Todo>;
  }

  addTodo(todo: Todo) {
    const todoCollectionRef = collection(this.firesotre, 'todos');
    //adding the new todo
    return from(addDoc(todoCollectionRef, todo));
  }

  removeTodo(todoId: string) {
    const todoDocRef = doc(this.firesotre, `todos/${todoId}`);
    return from(deleteDoc(todoDocRef));
  }

  updateTodo(todo: Todo, todoId: string) {
    const docRef = doc(this.firesotre, `todos/${todoId}`);
    return from(
      updateDoc(docRef, {
        title: todo.title,
        images: todo.images,
        content: todo.content,
        isCompleted: todo.isCompleted,
      })
    );
  }
}

export interface Todo {
  id?: string;
  content: string;
  images: string[];
  title: string;
  isCompleted: boolean;
}
