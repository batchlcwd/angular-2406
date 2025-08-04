import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from '../../store/counter.selectors';
import { decrement, increment, reset } from '../../store/counter.actions';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  counter$: Observable<number>;
  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounter);
  }

  decreaseCounter() {
    this.store.dispatch(decrement());
  }
  increaseCounter() {
    this.store.dispatch(increment());
  }
  resetCounter() {
    this.store.dispatch(reset());
  }
}
