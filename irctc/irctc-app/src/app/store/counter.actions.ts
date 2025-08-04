import { createAction } from '@ngrx/store';

// increment
export const increment = createAction('[Counter] Increment');
// decrement
export const decrement = createAction('[Counter] Decrement');
// reset
export const reset = createAction('[Counter] Reset');
