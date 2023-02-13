import React, { useState } from 'react'
import Contact from './Contact';

export default function Test() {
    const [on,setOn] = useState(false)
    const handleShow = () => {
        setOn(!on);
    }
  return (
    <div> 
         <button onClick={handleShow}>Show</button>
         {on && <Contact/>}
    </div>
  )
}
