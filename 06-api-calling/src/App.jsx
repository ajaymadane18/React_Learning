import React from 'react'
import axios from 'axios'
function App() {
        async function getdata(){
            const data= await  axios.get('https://jsonplaceholder.typicode.com/users')
               console.log(data.data);
               
          
         }
           
           
       
  return (
    <div>
        <button onClick={getdata}>click</button>
    </div>
  )
}

export default App
