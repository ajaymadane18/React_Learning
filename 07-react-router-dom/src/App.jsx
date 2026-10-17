import React from 'react'
import { Route, Routes,Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
   

    <div>
     <div className='dfn'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
      <Link to='/contact'>contact</Link>
     </div>
     <Routes>
      <Route  path='/'  element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
           
      
     </Routes>
    </div>
  )
}

export default App
