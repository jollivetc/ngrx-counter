import {
  createReducer,
  on
} from '@ngrx/store';
import { decrement, increment, multiply2, reset } from '../counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state)=> state+1),
  on(decrement, (state)=> state-1),
  on(reset, (state)=>0),
  on(multiply2, (state) => state*2)
)
