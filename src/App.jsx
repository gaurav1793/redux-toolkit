import {useDispatch, useSelector} from'react-redux'
import './App.css'
import { add, decrement, increment, reset } from './redux/features/slices';
import { useState } from 'react';

function App() {
  const count = useSelector((state)=>state.counting.value);
  const [amount ,setamount]=useState(0);
  const dispatch = useDispatch();

  function handleincrement(){
    dispatch(increment())
  }
  function handledecrement(){
    dispatch(decrement())
  }
  function handlereset(){
    dispatch(reset())
  }
  function handleadd(){
    dispatch(add(amount))
  }
  return (
    <>
      <div className="box">
      <button onClick={handleincrement}>+</button>
      <p>count:{count}</p>
      <button onClick={handledecrement}>-</button>
      <button onClick={handlereset}>reset</button>
      <input 
      type='number'
       value={amount} 
        onChange={(e)=>setamount(e.target.value)}
         placeholder='enter the digit you wnat to add in count'/>
      <button onClick={handleadd}>add</button>
      </div>
    </>
  )
}

export default App
