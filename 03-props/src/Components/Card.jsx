import React from 'react'

function card(props) {

  return (
    <div>
       <div className='card'>
          <img src={props.img} alt="" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View</button>
         </div>
    </div>
  )
}

export default card
