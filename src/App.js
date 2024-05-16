import './App.css';
import React,{useState,useEffect } from 'react';

function App (){
  const [count,setCount]=useState(0);
useEffect(()=>{console.warn("use effect")})


  

  return (
    <div className='App'>
      <h1>Use Effect in React</h1>
      <h2>{count}</h2>
          <button type="button" onClick={()=>{setCount(count+1)}} >Update Counter</button>
         </div>
  );
}
export default App;