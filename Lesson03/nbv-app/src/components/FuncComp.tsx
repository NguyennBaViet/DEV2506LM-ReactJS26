import React from 'react'

export default function FuncComp(props:any) {
  return (
    <div>
        <h2>Function Component Demo</h2>
        <hr/>
        <p>My name is,{props.name}</p>
        <p>Company:{props.name}</p>

    </div>
  )
}
