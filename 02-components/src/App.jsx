import React from 'react'
import Profile from './Components/Profile'
import User from './Components/User'
import './App.css'

function App() {
  const name="Ajay"
  const age="22"
  return (
    <div className='div'>
      <h1>hello guys i am {name}</h1>
      <h1> I am {age} years old</h1>
      <Profile/>
      <User/>
     
    </div>
  )
}

export default App
