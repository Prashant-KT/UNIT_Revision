import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { decrementAction, incrementAction } from './action';
export const Counter = () => {
    const count = useSelector((state)=>state.count.count)
    const dispatch = useDispatch()
  return (
    <>
      <h1>counter : {count}</h1>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button disabled = {count===0} onClick={() => dispatch(decrementAction())}>Decrement</button>
    </>
  );
}
