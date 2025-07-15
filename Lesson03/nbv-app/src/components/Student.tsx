import React from 'react'
interface StudentProps{
    id:number,
    name:string,
    age:number
}
export default function Student(props:StudentProps) {
  return (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.age}</td>
        <td>
            <button className='btn btn-info'>View</button>
            <button className='btn btn-success'>Edit</button>
            <button className='btn btn-danger'>Remove</button>
            </td>
    </tr>
  )
}
