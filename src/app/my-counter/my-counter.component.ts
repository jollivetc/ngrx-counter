import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, multiply2, reset } from '../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.scss']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store:Store<{count:number}>) {
    this.count$=this.store.select('count');
   }

  ngOnInit(): void {
  }

  increment():void{
    this.store.dispatch(increment());
  }
  decrement():void{
    this.store.dispatch(decrement());
  }
  reset():void{
    this.store.dispatch(reset());
  }
  multiply2():void{
    this.store.dispatch(multiply2());
  }

}
