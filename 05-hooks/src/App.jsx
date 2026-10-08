import React, { useState } from 'react'
import './index.css'
function App() {
       const [count,setcount]=useState(0);
       const increase=()=>{
       setcount(count+1)
       }
       const decrease=()=>{
        setcount(count-1)
       }
     localStorage.setItem('name','ajay')
       const name=localStorage.getItem('name')
       console.log(name);
       
       
       const data={
        'user':'ajay',
        'age':22,
        'city':"pune"
       }
       localStorage.setItem('data',JSON.stringify(data))
       
  return (
    <div>
      <h1>{count}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}> decrease</button>
    </div>
  )
}

export default App
