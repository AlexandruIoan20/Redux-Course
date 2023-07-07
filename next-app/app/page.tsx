'use client'; 

import type { RootState } from './GlobalRedux/store'; 
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';

export default function Home (){ 
  const count = useSelector((state: RootState) => state.counter.value); 
  const dispatch = useDispatch(); 

  return ( 
    <main>
      <button onClick = { () => { dispatch(increment())}}
      className = 'px-4 py-1 border-none bg-green-400'> Increment </button>

      <button onClick = { () => { dispatch(decrement())}}
            className = 'px-4 py-1 border-none bg-green-400'> Decrement </button>

      <button onClick = { () => { dispatch(incrementByAmount(2))}}
            className = 'px-4 py-1 border-none bg-green-400'> Increment by 2 </button>

      <p>{ count } </p>
    </main>
  )
}