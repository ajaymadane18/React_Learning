import React from 'react'
import Card from './components/card'

function App() {
  return (
    <div className='parent'>
       
    <Card user='Ajay Madane' img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNqeEjuDS4BmJ1XfDNHv1exUGaaMoHVFrnVtSqfpHCQ&s=10"/>
    <Card user='Raj Bhais' img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgpm9zFTcd1POkSPizwGIxq5NmZbbaLHrTydGUEEEyw&s=10"/>
    <Card user='Vinayak Bhais' img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10"/>
    
    </div>
  )
}

export default App
