import axios from 'axios'
import React, { useEffect, useState } from 'react'

function App() {
    const[userData,setUserData]=useState([]);
    const [index,setIndex]=useState(1);
       const getdata= async()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
    console.log(response.data);
       }
       useEffect(function(){
        getdata()
       },[index])
        let printuserdata='No User Available'
        if(userData.length>0){
          printuserdata=userData.map(function(ele){
            return <div>
              <div className='h-40 w-44 bg-white'>
              <img className='h-full object-cover' src={ele.download_url}/>
            </div>
            <h2>{ele.author}</h2>
            </div>
            
          })
        }
  return (
    <div className='overflow-auto bg-black h-screen text-white px-5'>
       
        <div className='flex flex-wrap gap-4'>
           
           {printuserdata}
        </div>
        <div className='flex justify-center items-center gap-6'> 
          <button onClick={()=>{
              if(index>1){
                setIndex(index-1)
              }
              
          }} className='bg-amber-400 text-black rounded px-4 py-2 font-bold'>Prev</button>
          <h2>page {index}</h2>
          <button onClick={()=>{
               setIndex(index+1)
          }} className='bg-amber-400 text-black rounded px-4 py-2 font-bold'>Next</button>
        </div>
    </div>
  
  )
}

export default App
