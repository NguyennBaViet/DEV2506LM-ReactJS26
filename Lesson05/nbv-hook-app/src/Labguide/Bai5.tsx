import React, { useEffect, useState } from 'react'

export default function Bai5() {
    const [count,setCount] = useState(0);
    const[running,setRunning] = useState(false)
    useEffect(() =>{
      let timer: string | number | NodeJS.Timer | undefined;
      if(running){
        timer = setInterval(() =>{
          setCount(prevCount => prevCount +1);
        },1000)
      }
      return () => clearInterval(timer)
    },[running])
  return (
    <div className='alert alert-danger'>
      <h2>Bộ đếm: {count}</h2>
      <button onClick={() => setRunning(!running)}>{running ? "Dừng" : "Bắt đầu"}</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
