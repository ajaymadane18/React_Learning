// import React, { useState } from 'react'
// import './index.css'
// function App() {
//        const [count,setcount]=useState(0);
//        const increase=()=>{
//        setcount(count+1)
//        }
//        const decrease=()=>{
//         setcount(count-1)
//        }
//      localStorage.setItem('name','ajay')
//        const name=localStorage.getItem('name')
//        console.log(name);
       
       
//        const data={
//         'user':'ajay',
//         'age':22,
//         'city':"pune"
//        }
//        localStorage.setItem('data',JSON.stringify(data))
       
//   return (
//     <div>
//       <h1>{count}</h1>
//         <button onClick={increase}>increase</button>
//         <button onClick={decrease}> decrease</button>
//     </div>
//   )
// }

// export default App




import React, { useEffect, useState } from 'react'

function App() {
    const [count ,setcount]=useState(0);
    const [count1 ,setcount1]=useState(10);
      const fun=()=>{
        setcount(count+1)
      }
       const fun1=()=>{
        setcount1(count1+10)
      }
      useEffect(function(){
        console.log("useffect is running");
        
      },[count1])
  return (
    <div>
        <h1>{count}</h1>
        <h1>{count1}</h1>
        <button  onClick={fun}>click</button>
        <button  onClick={fun1}>click</button>
    </div>
  )
}

export default App
