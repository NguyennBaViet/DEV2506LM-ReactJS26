import React from 'react'
import IEmployee from './IEmployee'
import Employee from './Employee';
interface EmployeeListProps{
    employees:IEmployee[]
}
export default function EmployeeList({employees}:EmployeeListProps) {
    console.log("employees",employees);
    const elementEmployee = employees.map((employee,index)=>{
        return <Employee key={index} employees={employee} />
    })
    return(
    <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {elementEmployee}
          </tbody>
        </table>
  )
}
