import React from 'react'
//Function Component
type Props ={
    name:string;
    Company:string;
}
export default function FuncComp1({name,Company}:Props) {
  return (
    <div>
        <h2>Funtion Component 1</h2>
        <hr />
        <p>My name is,{name}</p>
        <p>Company:{Company}</p>
    </div>
  )
}
