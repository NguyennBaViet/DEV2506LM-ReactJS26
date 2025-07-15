import React from 'react'

export default function FuncComp2(props:any) {
  return (
    <div>
        <h2>Bài tập</h2>
        <div className='alert alert-info'>
        <p>Full name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Email:{props.email}</p>
        <p>Address:{props.address}</p>
        </div>
    </div>
  )
}
