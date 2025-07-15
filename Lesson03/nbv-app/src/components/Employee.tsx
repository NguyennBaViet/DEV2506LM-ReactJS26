import React from 'react'
import IEmployee from './IEmployee'
interface EmployeeProps{
    employees:IEmployee
}
export default function Employee({employees}:EmployeeProps) {
  return (
    <tr>
        <td>{employees.id}</td>
        <td>{employees.name}</td>
        <td>{employees.age}</td>
        <td>{employees.email}</td>
        <td>
            <button className='btn btn-info'>View</button>
            <button className='btn btn-success'>Edit</button>
            <button className='btn btn-danger'>Delete</button>
        </td>
    </tr>
  )
}
