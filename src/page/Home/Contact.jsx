import React, { useRef, useState } from 'react'
import img from '../../assets/img/imagehome.PNG'

export default function Contact() {
  const [count, setCount] = useState(60)

  let timerId = useRef();

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount -1)
    }, 1000)

    console.log(timerId)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>

      <img src={img} alt="logo.png"></img> 
    </div>
  )
}
