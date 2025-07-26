import React, { useEffect, useState } from 'react'

export default function UseEffectDemo() {
    // 1.Callback
    useEffect(() =>{
        console.log("Đây là callback function")
    })
    // 2. callback và array empty
    useEffect(() =>{
        console.log("Đây là một callback function và là mảng rỗng")
    })
    // 3. callback và deps
    const [count,setCount] = useState(0)
    const [num,setNum] = useState(0)
    useEffect(() =>{
        console.log("callback và [deps]",count)
    },[count])
  return (
    <div className='alert alert-success'>
        <h2>Sử dụng use effect</h2>
        <button onClick={()=>setCount(count+1)}>Count ++: {count}</button>
    </div>
  )
}
