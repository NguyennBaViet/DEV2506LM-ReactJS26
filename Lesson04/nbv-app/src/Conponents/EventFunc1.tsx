import React from 'react'

export default function EventFunc1() {
    const eventHandleClick1 = (content:string)=>{
        alert(content)
    }
  return (
    <div>
      <button onClick={()=>eventHandleClick1("Devmaster")}>Click here</button>
    </div>
  )
}
